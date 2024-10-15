---
title: 'watch - CLI command'
description: 'Watch for changes within projects, and execute commands.'
---

# watch

Watch for changes within projects, and execute commands.

## Usage

```shell
nxrc watch
```

Install `nxrc` globally to invoke the command directly using `nxrc`, or use `npx nxrc`, `yarn nxrc`, or `pnpm nxrc`.

### Examples

Watch the "app" project and echo the project name and the files that changed:

```shell
 nxrc watch --projects=app -- echo \$NX_PROJECT_NAME \$NX_FILE_CHANGES
```

Watch "app1" and "app2" and echo the project name whenever a specified project or its dependencies change:

```shell
 nxrc watch --projects=app1,app2 --includeDependentProjects -- echo \$NX_PROJECT_NAME
```

Watch all projects (including newly created projects) in the workspace:

```shell
 nxrc watch --all -- echo \$NX_PROJECT_NAME
```

## Options

| Option                       | Type    | Description                                                                 |
| ---------------------------- | ------- | --------------------------------------------------------------------------- |
| `--all`                      | boolean | Watch all projects.                                                         |
| `--help`                     | boolean | Show help.                                                                  |
| `--includeDependentProjects` | boolean | When watching selected projects, include dependent projects as well.        |
| `--projects`                 | string  | Projects to watch (comma/space delimited).                                  |
| `--verbose`                  | boolean | Run watch mode in verbose mode, where commands are logged before execution. |
| `--version`                  | boolean | Show version number.                                                        |
