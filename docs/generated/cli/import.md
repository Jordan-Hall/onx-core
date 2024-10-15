---
title: 'import - CLI command'
description: 'Import code and git history from another repository into this repository.'
---

# import

Import code and git history from another repository into this repository.

## Usage

```shell
nxrc import [sourceRepository] [destinationDirectory]
```

Install `nxrc` globally to invoke the command directly using `nxrc`, or use `npx nxrc`, `yarn nxrc`, or `pnpm nxrc`.

## Options

| Option                   | Type    | Description                                                                 |
| ------------------------ | ------- | --------------------------------------------------------------------------- |
| `--depth`                | number  | The depth to clone the source repository (limit this for faster git clone). |
| `--destinationDirectory` | string  | The directory in the current workspace to import into.                      |
| `--help`                 | boolean | Show help.                                                                  |
| `--interactive`          | boolean | Interactive mode. (Default: `true`)                                         |
| `--ref`                  | string  | The branch from the source repository to import.                            |
| `--sourceDirectory`      | string  | The directory in the source repository to import from.                      |
| `--sourceRepository`     | string  | The remote URL of the source to import.                                     |
| `--verbose`              | boolean | Prints additional information about the commands (e.g., stack traces).      |
| `--version`              | boolean | Show version number.                                                        |
