// =============================================================================
// TypeScript .d.ts preset
// =============================================================================

import type {Linter} from 'eslint';


export const eslintPresetTypeScriptD: Linter.RulesRecord = {
  'import/newline-after-import': ['error', {count: 1, exactCount: false, considerComments: true}]
};
