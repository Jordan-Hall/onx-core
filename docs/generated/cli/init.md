---
title: 'init - CLI command'
description: 'Adds Nx to any type of workspace. It installs nx, creates an nx.json configuration file and optionally sets up remote caching. For more info, check https://nx.dev/recipes/adopting-nx.'
---

# init

Adds Nx to any type of workspace. It installs nx, creates an nx.json configuration file and optionally sets up remote caching. For more info, check https://nx.dev/recipes/adopting-nx.

## Usage

```shell
nxcc init
```

Install `nxcc` globally to invoke the command directly using `nxcc`, or use `npx nxcc`, `yarn nxcc`, or `pnpm nxcc`.

## Options

| Option                   | Type    | Description                                                                                         |
| ------------------------ | ------- | --------------------------------------------------------------------------------------------------- |
| `--help`                 | boolean | Show help.                                                                                          |
| `--interactive`          | boolean | When false disables interactive input prompts for options. (Default: `true`)                        |
| `--nxCloud`              | boolean | Set up distributed caching with Nx Cloud.                                                           |
| `--useDotNxInstallation` | boolean | Initialize an Nx workspace setup in the .nx directory of the current repository. (Default: `false`) |
| `--version`              | boolean | Show version number.                                                                                |
