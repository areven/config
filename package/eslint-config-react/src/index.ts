// =============================================================================
// eslint-config-react configuration
// =============================================================================

import globals from 'globals';
import coreConfig, {
  eslintPresetReact, eslintPresetReactHooks, jsFiles, tsFiles, usesTypeScript
} from '@areven/eslint-config';
import type {Linter} from 'eslint';


const eslintConfig: Linter.Config[] = [
  ...coreConfig,

  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },

  {
    files: ['**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },

  {
    files: [
      ...jsFiles,
      ...(usesTypeScript ? tsFiles : [])
    ],
    plugins: {
      'react': require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks')
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },

    settings: {
      'react': {
        version: 'detect'
      }
    },

    rules: {
      ...eslintPresetReact,
      ...eslintPresetReactHooks
    }
  }
];

export default eslintConfig;
