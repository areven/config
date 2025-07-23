// =============================================================================
// eslint-config-node configuration
// =============================================================================

import globals from 'globals';
import coreConfig, {jsFiles, tsFiles, usesTypeScript} from '@areven/eslint-config';
import type {Linter} from 'eslint';


const eslintConfig: Linter.Config[] = [
  ...coreConfig,

  {
    files: jsFiles,
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  ...(!usesTypeScript ? [] : [{
    files: tsFiles,
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }])
];

export default eslintConfig;
