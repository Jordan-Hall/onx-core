---
title: 'import - CLI command'
description: 'Import code and git history from another repository into this repository.'
---

# import

Import code and git history from another repository into this repository.

## Usage

```shell
nxcc import [sourceRepository] [destinationDirectory]
```

Install `nxcc` globally to invoke the command directly using `nxcc`, or use `npx nxcc`, `yarn nxcc`, or `pnpm nxcc`.

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
