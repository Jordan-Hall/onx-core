import * as chalk from 'chalk';
import { readFileSync } from 'fs';
import { readJsonSync } from 'fs-extra';
import { codeBlock, h1, h2, h3, lines } from 'markdown-factory';
import { join } from 'path';
import { register as registerTsConfigPaths } from 'tsconfig-paths';

import { examples } from '../../../packages/nx/src/command-line/examples';
import {
  formatDescription,
  generateMarkdownFile,
  generateOptionsMarkdown,
  getCommands,
  parseCommand,
  ParsedCommand,
} from '../utils';

const importFresh = require('import-fresh');

// Docs for these commands are inside docs/shared/cli - they are not dynamically generated.
const sharedCommands = ['generate', 'exec'];

// These commands are hidden from the documentation.
const hiddenCommands = ['$0'];

export async function generateCliDocumentation(
  commandsOutputDirectory: string
) {
  /**
   * For certain commands, they will output dynamic data at runtime in a real workspace,
   * so we leverage an envrionment variable to inform the logic of the context that we
   * are just statically generating documentation for the current execution.
   */
  process.env.NX_GENERATE_DOCS_PROCESS = 'true';

  const config = readJsonSync(
    join(__dirname, '../../../tsconfig.base.json')
  ).compilerOptions;
  registerTsConfigPaths(config);

  console.log(
    `\n${chalk.blue('i')} Generating Documentation for nxrc Commands`
  );

  const { commandsObject } = importFresh(
    '../../../packages/nx/src/command-line/nx-commands'
  );

  function generateMarkdown(command: ParsedCommand) {
    let templateLines = [
      `
---
title: "${command.name} - CLI command"
description: "${command.description}"
---`,
      h1(command.name),
      formatDescription(command.description, command.deprecated),
      h2('Usage'),
      codeBlock(`nxrc ${command.commandString}`, 'shell'),
      'Install `nxrc` globally to invoke the command directly using `nxrc`, or use `npx nxrc`, `yarn nxrc`, or `pnpm nxrc`.',
    ];

    if (examples[command.name] && examples[command.name].length > 0) {
      templateLines.push(h3('Examples'));
      examples[command.name].forEach((example) => {
        templateLines.push(
          example.description + ':',
          codeBlock(` nxrc ${example.command}`, 'shell')
        );
      });
    }

    templateLines.push(generateOptionsMarkdown(command));

    if (command.subcommands?.length) {
      templateLines.push(h2('Subcommands'));
      for (const subcommand of command.subcommands) {
        templateLines.push(
          h3(subcommand.name.replace('$0', 'Base Command Options')),
          formatDescription(subcommand.description, subcommand.deprecated),
          codeBlock(
            `nxrc ${command.commandString} ${subcommand.commandString.replace(
              '$0 ',
              ''
            )}`,
            'shell'
          ),
          generateOptionsMarkdown(subcommand, 2)
        );
      }
    }

    return {
      name: command.name
        .replace(':', '-')
        .replace(' ', '-')
        .replace(/[\]\[.]+/gm, ''),
      template: lines(templateLines),
    };
  }

  // TODO: Try to add option's type, examples, and group?
  const nxCommands = getCommands(commandsObject);
  await Promise.all(
    Object.keys(nxCommands)
      .filter(
        (name) =>
          !sharedCommands.includes(name) &&
          !hiddenCommands.includes(name) &&
          // These are all supported yargs fields for description
          (nxCommands[name].description ||
            nxCommands[name].describe ||
            nxCommands[name].desc)
      )
      .map((name) => parseCommand(name, nxCommands[name]))
      .map(async (command) => generateMarkdown(await command))
      .map(async (templateObject) =>
        generateMarkdownFile(commandsOutputDirectory, await templateObject)
      )
  );

  delete process.env.NX_GENERATE_DOCS_PROCESS;

  console.log(`${chalk.green('✓')} Generated Documentation for nxrc Commands`);
}
