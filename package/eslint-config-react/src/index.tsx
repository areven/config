// =============================================================================
// eslint-config-react configuration
// =============================================================================

import globals from 'globals';
import coreConfig, {
  eslintPresetImport, eslintPresetReact, eslintPresetReactHooks, jsFiles, tsFiles, usesTypeScript
} from '@areven/eslint-config';
import type {Linter} from 'eslint';


const eslintConfig: Linter.Config[] = [
  ...coreConfig,

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
      parser: require('@babel/eslint-parser'),
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },

    settings: {
      'react': {
        version: 'detect'
      },
      'import/parsers': {
        '@babel/eslint-parser': [
          ...jsFiles,
          ...(usesTypeScript ? tsFiles : [])
        ]
      }
    },

    rules: {
      ...eslintPresetImport,
      ...eslintPresetReact,
      ...eslintPresetReactHooks
    }
  }
];

export default eslintConfig;
