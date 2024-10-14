---
title: 'reset - CLI command'
description: 'Clears cached Nx artifacts and metadata about the workspace and shuts down the Nx Daemon.'
---

# reset

Clears cached Nx artifacts and metadata about the workspace and shuts down the Nx Daemon.

## Usage

```shell
nxcc reset
```

Install `nxcc` globally to invoke the command directly using `nxcc`, or use `npx nxcc`, `yarn nxcc`, or `pnpm nxcc`.

### Examples

Clears the internal state of the daemon and metadata that Nx is tracking. Helpful if you are getting strange errors and want to start fresh:

```shell
 nxcc reset
```

Clears the Nx Cache directory. This will remove all local cache entries for tasks, but will not affect the remote cache:

```shell
 nxcc reset --only-cache
```

Stops the Nx Daemon, it will be restarted fresh when the next Nx command is run.:

```shell
 nxcc reset --only-daemon
```

Clears the workspace data directory. Used by Nx to store cached data about the current workspace (e.g. partial results, incremental data, etc):

```shell
 nxcc reset --only-workspace-data
```

## Options

| Option                | Type    | Description                                                                                                                                     |
| --------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `--help`              | boolean | Show help.                                                                                                                                      |
| `--onlyCache`         | boolean | Clears the Nx cache directory. This will remove all local cache entries for tasks, but will not affect the remote cache.                        |
| `--onlyCloud`         | boolean | Resets the Nx Cloud client. NOTE: Does not clear the remote cache.                                                                              |
| `--onlyDaemon`        | boolean | Stops the Nx Daemon, it will be restarted fresh when the next Nx command is run.                                                                |
| `--onlyWorkspaceData` | boolean | Clears the workspace data directory. Used by Nx to store cached data about the current workspace (e.g. partial results, incremental data, etc). |
| `--version`           | boolean | Show version number.                                                                                                                            |
