// =============================================================================
// eslint-config configuration
// =============================================================================

import type {Linter} from 'eslint';
import globals from 'globals';
import {jsFiles, tsFiles, usesJSX, usesTypeScript} from './environment';
import {eslintPresetImport} from './preset/import';
import {eslintPresetJavaScript} from './preset/javascript';
import {eslintPresetStylistic} from './preset/stylistic';
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
      sourceType: 'module',
      globals: {
        ...globals['shared-node-browser']
      }
    },
    plugins: {
      '@areven': require('@areven/eslint-plugin'),
      '@stylistic': require('@stylistic/eslint-plugin'),
      'import': require('eslint-plugin-import')
    },
    settings: {
      'import/parsers': {
        'espree': jsFiles
      },
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
      ...eslintPresetJavaScript,
      ...eslintPresetImport,
      ...eslintPresetStylistic
    }
  },

  ...(!usesTypeScript ? [] : [{
    files: tsFiles,
    languageOptions: {
      parser: require('typescript-eslint').parser,
      parserOptions: {
        project: true
      },
      globals: {
        ...globals['shared-node-browser']
      }
    },
    plugins: {
      '@areven': require('@areven/eslint-plugin'),
      '@stylistic': require('@stylistic/eslint-plugin'),
      '@typescript-eslint': require('typescript-eslint').plugin,
      'import': require('eslint-plugin-import')
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': tsFiles
      },
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
      ...eslintPresetTypeScript,
      ...eslintPresetImport,
      ...eslintPresetStylistic
    }
  }])
];
