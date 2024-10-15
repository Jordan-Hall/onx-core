import { join, relative, sep } from 'node:path';
import { Tree } from '../../generators/tree';
import { getIgnoreObject } from '../../utils/ignore';

export default function nxReleasePath(tree: Tree) {
  visitNotIgnoredFiles(tree, '', (file) => {
    const contents = tree.read(file).toString('utf-8');
    if (
      // the deep import usage should be replaced by the new location
      contents.includes('nxrc/src/command-line/release') ||
      // changelog-renderer has moved into nx/release
      contents.includes('nxrc/changelog-renderer')
    ) {
      const finalContents = contents
        // replace instances of old changelog renderer location
        .replace(/nxrc\/changelog-renderer/g, 'nxrc/release/changelog-renderer')
        // replace instances of deep import for programmatic API (only perform the replacement if an actual import by checking for trailing ' or ")
        .replace(/nxrc\/src\/command-line\/release(['"])/g, 'nxrc/release$1');
      tree.write(file, finalContents);
    }
  });
}

// Adapted from devkit
export function visitNotIgnoredFiles(
  tree: Tree,
  dirPath: string = tree.root,
  visitor: (path: string) => void
): void {
  const ig = getIgnoreObject();
  dirPath = normalizePathRelativeToRoot(dirPath, tree.root);
  if (dirPath !== '' && ig?.ignores(dirPath)) {
    return;
  }
  for (const child of tree.children(dirPath)) {
    const fullPath = join(dirPath, child);
    if (ig?.ignores(fullPath)) {
      continue;
    }
    if (tree.isFile(fullPath)) {
      visitor(fullPath);
    } else {
      visitNotIgnoredFiles(tree, fullPath, visitor);
    }
  }
}

// Copied from devkit
function normalizePathRelativeToRoot(path: string, root: string): string {
  return relative(root, join(root, path)).split(sep).join('/');
}
