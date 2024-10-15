---
title: 'format:write - CLI command'
description: 'Overwrite un-formatted files.'
---

# format:write

Overwrite un-formatted files.

## Usage

```shell
nxrc format:write
```

Install `nxrc` globally to invoke the command directly using `nxrc`, or use `npx nxrc`, `yarn nxrc`, or `pnpm nxrc`.

## Options

| Option            | Type    | Description                                                                                                                             |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--all`           | boolean | Format all projects.                                                                                                                    |
| `--base`          | string  | Base of the current branch (usually main).                                                                                              |
| `--exclude`       | string  | Exclude certain projects from being processed.                                                                                          |
| `--files`         | string  | Change the way Nx is calculating the affected command by providing directly changed files, list of files delimited by commas or spaces. |
| `--head`          | string  | Latest commit of the current branch (usually HEAD).                                                                                     |
| `--help`          | boolean | Show help.                                                                                                                              |
| `--libs-and-apps` | boolean | Format only libraries and applications files.                                                                                           |
| `--projects`      | string  | Projects to format (comma/space delimited).                                                                                             |
| `--uncommitted`   | boolean | Uncommitted changes.                                                                                                                    |
| `--untracked`     | boolean | Untracked changes.                                                                                                                      |
| `--version`       | boolean | Show version number.                                                                                                                    |
