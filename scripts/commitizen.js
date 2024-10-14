// prettier-ignore
const scopes = [
  { value: 'core',              name: 'core:                  anything Nx core specific' },
  { value: 'misc',              name: 'misc:                  misc stuff' },
];

// precomputed scope
const scopeComplete = require('child_process')
  .execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')
  .find((r) => ~r.indexOf('M  packages'))
  ?.replace(/(\/)/g, '%%')
  ?.match(/packages%%((\w|-)*)/)?.[1];

/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
  /** @usage `pnpm commit :f` */
  alias: {
    f: 'docs(core): fix typos',
    b: 'chore(repo): bump dependencies',
  },
  scopes,
  defaultScope: scopeComplete,
  scopesSearchValue: true,
  maxSubjectLength: 100,
  allowCustomScopes: false,
  allowEmptyScopes: false,
  allowCustomIssuePrefix: false,
  allowEmptyIssuePrefix: false,
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'cleanup',
      name: 'cleanup:  A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'chore',
      name: "chore:    Other changes that don't modify src or test files",
    },
  ],
};
