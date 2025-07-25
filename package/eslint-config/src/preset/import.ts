// =============================================================================
// Import preset
// =============================================================================

import type {Linter} from 'eslint';


export const eslintPresetImport: Linter.RulesRecord = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/default': 'error',
  'import/enforce-node-protocol-usage': ['error', 'always'],
  'import/export': 'error',
  'import/extensions': [
    'error', 'always', {
      'js': 'never',
      'mjs': 'never',
      'cjs': 'never',
      'jsx': 'never',
      'ts': 'never',
      'tsx': 'never',
      'mtsx': 'never'
    }
  ],
  'import/first': 'error',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/newline-after-import': ['error', {count: 2, exactCount: true, considerComments: true}],
  'import/no-absolute-path': 'error',
  'import/no-duplicates': 'error',
  'import/no-empty-named-blocks': ['error'],
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',
  'import/order': ['error', {
    groups: [
      'external',
      'builtin', // will use proto: prefix
      'internal',
      'parent',
      'index',
      'sibling',
      'object',
      'type'
    ],
    sortTypesGroup: true,
    distinctGroup: false,
    pathGroupsExcludedImportTypes: ['builtin'],
    pathGroups: [
      {
        pattern: '@*/**',
        group: 'builtin',
        position: 'after'
      },
      {
        pattern: '~/**',
        group: 'internal'
      }
    ],
    alphabetize: {
      order: 'asc',
      orderImportKind: 'asc',
      caseInsensitive: true
    },
    named: {
      enabled: true,
      export: false,
      require: false,
      cjsExports: false,
      types: 'types-last'
    }
  }]
};
