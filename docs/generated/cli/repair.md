---
title: 'repair - CLI command'
description: 'Repair any configuration that is no longer supported by Nx.

  Specifically, this will run every migration within the `nx` package
  against the current repository. Doing so should fix any configuration
  details left behind if the repository was previously updated to a new
  Nx version without using `nx migrate`.

  If your repository has only ever updated to newer versions of Nx with
  `nx migrate`, running `nx repair` should do nothing.
  '
---

# repair

Repair any configuration that is no longer supported by Nx.

    Specifically, this will run every migration within the `nx` package
    against the current repository. Doing so should fix any configuration
    details left behind if the repository was previously updated to a new
    Nx version without using `nx migrate`.

    If your repository has only ever updated to newer versions of Nx with
    `nx migrate`, running `nx repair` should do nothing.

## Usage

```shell
nxrc repair
```

Install `nxrc` globally to invoke the command directly using `nxrc`, or use `npx nxrc`, `yarn nxrc`, or `pnpm nxrc`.

## Options

| Option      | Type    | Description                                                            |
| ----------- | ------- | ---------------------------------------------------------------------- |
| `--help`    | boolean | Show help.                                                             |
| `--verbose` | boolean | Prints additional information about the commands (e.g., stack traces). |
| `--version` | boolean | Show version number.                                                   |
