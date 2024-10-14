---
title: 'list - CLI command'
description: 'Lists installed plugins, capabilities of installed plugins and other available plugins.'
---

# list

Lists installed plugins, capabilities of installed plugins and other available plugins.

## Usage

```shell
nxcc list [plugin]
```

Install `nxcc` globally to invoke the command directly using `nxcc`, or use `npx nxcc`, `yarn nxcc`, or `pnpm nxcc`.

### Examples

List the plugins installed in the current workspace:

```shell
 nxcc list
```

List the generators and executors available in the `@nx/web` plugin if it is installed (If the plugin is not installed `nx` will show advice on how to add it to your workspace):

```shell
 nxcc list @nx/web
```

## Options

| Option      | Type    | Description                               |
| ----------- | ------- | ----------------------------------------- |
| `--help`    | boolean | Show help.                                |
| `--plugin`  | string  | The name of an installed plugin to query. |
| `--version` | boolean | Show version number.                      |
