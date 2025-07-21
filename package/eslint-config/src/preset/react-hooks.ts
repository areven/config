// =============================================================================
// React hooks preset
// =============================================================================

import type {Linter} from 'eslint';


export const eslintPresetReactHooks: Linter.RulesRecord = {
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error'
};
