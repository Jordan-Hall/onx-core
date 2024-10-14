---
title: 'show - CLI command'
description: 'Show information about the workspace (e.g., list of projects).'
---

# show

Show information about the workspace (e.g., list of projects).

## Usage

```shell
nxcc show
```

Install `nxcc` globally to invoke the command directly using `nxcc`, or use `npx nxcc`, `yarn nxcc`, or `pnpm nxcc`.

### Examples

Show all projects in the workspace:

```shell
 nxcc show projects
```

Show all projects with names starting with "api-". The "projects" option is useful to see which projects would be selected by run-many:

```shell
 nxcc show projects --projects api-*
```

Show all projects with a tag starting with "ui-". The "projects" option is useful to see which projects would be selected by run-many:

```shell
 nxcc show projects --projects tag:ui-*
```

Show all projects with a serve target:

```shell
 nxcc show projects --with-target serve
```

Show affected projects in the workspace:

```shell
 nxcc show projects --affected
```

Show affected apps in the workspace:

```shell
 nxcc show projects --affected --type app
```

Show affected projects in the workspace, excluding end-to-end projects:

```shell
 nxcc show projects --affected --exclude=*-e2e
```

If in an interactive terminal, opens the project detail view. If not in an interactive terminal, defaults to JSON:

```shell
 nxcc show project my-app
```

Show detailed information about "my-app" in a json format:

```shell
 nxcc show project my-app --json
```

Show information about "my-app" in a human readable format:

```shell
 nxcc show project my-app --json false
```

Opens a web browser to explore the configuration of "my-app":

```shell
 nxcc show project my-app --web
```

## Options

| Shared Option | Type    | Description          |
| ------------- | ------- | -------------------- |
| `--help`      | boolean | Show help.           |
| `--json`      | boolean | Output JSON.         |
| `--version`   | boolean | Show version number. |

## Subcommands

### projects

Show a list of projects in the workspace.

```shell
nxcc show projects
```

## Options

| Option          | Type                | Description                                                                                                                             |
| --------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--affected`    | boolean             | Show only affected projects.                                                                                                            |
| `--base`        | string              | Base of the current branch (usually main).                                                                                              |
| `--exclude`     | string              | Exclude certain projects from being processed.                                                                                          |
| `--files`       | string              | Change the way Nx is calculating the affected command by providing directly changed files, list of files delimited by commas or spaces. |
| `--head`        | string              | Latest commit of the current branch (usually HEAD).                                                                                     |
| `--help`        | boolean             | Show help.                                                                                                                              |
| `--projects`    | string              | Show only projects that match a given pattern.                                                                                          |
| `--sep`         | string              | Outputs projects with the specified seperator.                                                                                          |
| `--type`        | `app`, `lib`, `e2e` | Select only projects of the given type.                                                                                                 |
| `--uncommitted` | boolean             | Uncommitted changes.                                                                                                                    |
| `--untracked`   | boolean             | Untracked changes.                                                                                                                      |
| `--verbose`     | boolean             | Prints additional information about the commands (e.g., stack traces).                                                                  |
| `--version`     | boolean             | Show version number.                                                                                                                    |
| `--withTarget`  | string              | Show only projects that have a specific target.                                                                                         |

### project

Shows resolved project configuration for a given project.

```shell
nxcc show project <projectName>
```

## Options

| Option          | Type    | Description                                                            |
| --------------- | ------- | ---------------------------------------------------------------------- |
| `--help`        | boolean | Show help.                                                             |
| `--open`        | boolean | Set to false to prevent the browser from opening when using --web.     |
| `--projectName` | string  | Which project should be viewed?.                                       |
| `--verbose`     | boolean | Prints additional information about the commands (e.g., stack traces). |
| `--version`     | boolean | Show version number.                                                   |
| `--web`         | boolean | Show project details in the browser. (default when interactive).       |
