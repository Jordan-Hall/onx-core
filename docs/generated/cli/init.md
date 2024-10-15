---
title: 'init - CLI command'
description: 'Adds Nx to any type of workspace. It installs nx, creates an nx.json configuration file and optionally sets up remote caching. For more info, check https://nx.dev/recipes/adopting-nx.'
---

# init

Adds Nx to any type of workspace. It installs nx, creates an nx.json configuration file and optionally sets up remote caching. For more info, check https://nx.dev/recipes/adopting-nx.

## Usage

```shell
nxrc init
```

Install `nxrc` globally to invoke the command directly using `nxrc`, or use `npx nxrc`, `yarn nxrc`, or `pnpm nxrc`.

## Options

| Option                   | Type    | Description                                                                                         |
| ------------------------ | ------- | --------------------------------------------------------------------------------------------------- |
| `--help`                 | boolean | Show help.                                                                                          |
| `--interactive`          | boolean | When false disables interactive input prompts for options. (Default: `true`)                        |
| `--nxCloud`              | boolean | Set up distributed caching with Nx Cloud.                                                           |
| `--useDotNxInstallation` | boolean | Initialize an Nx workspace setup in the .nx directory of the current repository. (Default: `false`) |
| `--version`              | boolean | Show version number.                                                                                |
