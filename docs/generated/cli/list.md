---
title: 'list - CLI command'
description: 'Lists installed plugins, capabilities of installed plugins and other available plugins.'
---

# list

Lists installed plugins, capabilities of installed plugins and other available plugins.

## Usage

```shell
nxrc list [plugin]
```

Install `nxrc` globally to invoke the command directly using `nxrc`, or use `npx nxrc`, `yarn nxrc`, or `pnpm nxrc`.

### Examples

List the plugins installed in the current workspace:

```shell
 nxrc list
```

List the generators and executors available in the `@nx/web` plugin if it is installed (If the plugin is not installed `nx` will show advice on how to add it to your workspace):

```shell
 nxrc list @nx/web
```

## Options

| Option      | Type    | Description                               |
| ----------- | ------- | ----------------------------------------- |
| `--help`    | boolean | Show help.                                |
| `--plugin`  | string  | The name of an installed plugin to query. |
| `--version` | boolean | Show version number.                      |
