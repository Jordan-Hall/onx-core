import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { output } from '../utils/output';

export function decorateNx() {
  output.warn({
    title: `Decoration of the Nx CLI to run nxrc is initiated.`,
    bodyLines: [
      `The nx.js file in the bin folder is being modified to delegate commands to nxrc.`,
    ],
  });
  
  const nxJsPath = join(__dirname, '../../../bin/nx.js');
  const nxJsContent = readFileSync(nxJsPath, 'utf-8');
  
  const injectionPoint = nxJsContent.indexOf('function main() {') + 'function main() {'.length;
  
  const injectionCode = `
  if (!process.env['NX_CLI_SET']) {
    require('nxrc/bin/nx');
    return new Promise(function(res, rej) {});
  }
  `;
  
  const newContent = `${nxJsContent.slice(0, injectionPoint)}
  ${injectionCode}
  ${nxJsContent.substring(injectionPoint)}
  `;
  
  writeFileSync(nxJsPath, newContent, 'utf-8');
  
  output.success({
    title: `Successfully decorated nx.js to delegate to nxrc.`,
    bodyLines: [`The nx.js file has been modified to route commands through nxrc.`],
  });
}

decorateNx();
