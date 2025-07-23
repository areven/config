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
      'ts': 'never'
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
    pathGroupsExcludedImportTypes: ['external'],
    pathGroups: [
      {
        pattern: '@**',
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
      orderImportKind: true,
      caseInsensitive: true
    },
    named: {
      enabled: true,
      types: 'types-last'
    }
  }]
};
