// =============================================================================
// eslint-config-node configuration
// =============================================================================

import globals from 'globals';
import coreConfig, {eslintPresetImport, jsFiles, tsFiles, usesTypeScript} from '@areven/eslint-config';
import type {Linter} from 'eslint';


const eslintConfig: Linter.Config[] = [
  ...coreConfig,

  {
    files: jsFiles,
    languageOptions: {
      globals: {
        ...globals.node
      }
    },

    settings: {
      'import/parsers': {
        'espree': jsFiles
      }
    },

    rules: {
      ...eslintPresetImport
    }
  },

  ...(!usesTypeScript ? [] : [{
    files: tsFiles,
    languageOptions: {
      globals: {
        ...globals.node
      }
    },

    settings: {
      'import/parsers': {
        'espree': tsFiles
      }
    },

    rules: {
      ...eslintPresetImport
    }
  }])
];

export default eslintConfig;
