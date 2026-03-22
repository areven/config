// =============================================================================
// Areven preset
// =============================================================================

import type {Linter} from 'eslint';


export const eslintPresetAreven: Linter.RulesRecord = {
  '@areven/file-header': 'error',
  '@areven/import-line-breaks': 'error'
};
