// =============================================================================
// Import preset
// =============================================================================

import type {Linter} from 'eslint';


export const eslintPresetImport: Linter.RulesRecord = {
  'import/default': 'error',
  'import/export': 'error',
  'import/extensions': [
    'error', 'always', {
      'js': 'never',
      'ts': 'never'
    }
  ],
  'import/first': 'error',
  'import/named': 'error',
  'import/newline-after-import': ['error', {count: 2}],
  'import/no-absolute-path': 'error',
  'import/no-duplicates': 'error',
  'import/no-empty-named-blocks': ['error'],
  'import/no-extraneous-dependencies': ['error'],
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',
  'import/order': ['error', {groups: [['builtin', 'external']]}],
  'rulesdir/import-order': ['error']
};
