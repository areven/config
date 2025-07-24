// =============================================================================
// eslint-config-react configuration
// =============================================================================

import globals from 'globals';
import coreConfig, {
  eslintPresetReact, eslintPresetReactHooks, jsFiles, jsxFiles, tsFiles, tsxFiles, usesTypeScript
} from '@areven/eslint-config';
import type {Linter} from 'eslint';


const eslintConfig: Linter.Config[] = [
  ...coreConfig,

  {
    files: jsxFiles,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },

  {
    files: tsxFiles,
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
        ...globals.node,
        ...globals.browser,
        ...globals.serviceworker
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
