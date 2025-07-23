// =============================================================================
// eslint-config configuration
// =============================================================================

import type {Linter} from 'eslint';
import {jsFiles, tsFiles, usesJSX, usesTypeScript} from './environment';
import {eslintPresetJavaScript} from './preset/javascript';
import {eslintPresetTypeScript} from './preset/typescript';
import {isString} from './util';


export const eslintConfig: Linter.Config[] = [
  {
    ignores: [
      '**/node_modules/',
      '.expo/',
      '.git/',
      '.idea/',
      '.next/',
      '.vscode/',
      '.yarn/'
    ]
  },

  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },

  {
    files: jsFiles,
    languageOptions: {
      sourceType: 'module'
    },
    plugins: {
      '@areven': require('@areven/eslint-plugin'),
      'import': require('eslint-plugin-import')
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['~', './']],
          extensions: [
            usesTypeScript && '.ts',
            usesTypeScript && usesJSX && '.tsx',
            '.js',
            usesJSX && '.jsx',
            '.json'
          ].filter(isString)
        }
      }
    },
    rules: {
      ...eslintPresetJavaScript
    }
  },

  ...(!usesTypeScript ? [] : [{
    files: tsFiles,
    languageOptions: {
      parser: require('typescript-eslint').parser,
      parserOptions: {
        project: true
      }
    },
    plugins: {
      '@areven': require('@areven/eslint-plugin'),
      '@typescript-eslint': require('typescript-eslint').plugin,
      'import': require('eslint-plugin-import')
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['~', './']],
          extensions: [
            '.ts',
           usesJSX && '.tsx',
            '.js',
            usesJSX && '.jsx',
            '.json'
          ].filter(isString)
        }
      }
    },
    rules: {
      ...eslintPresetJavaScript,
      ...eslintPresetTypeScript
    }
  }])
];
