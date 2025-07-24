// =============================================================================
// eslint-config environment
// =============================================================================

import {hasModule, isString} from './util';


export const usesTypeScript: boolean = hasModule('typescript');
export const usesJSX: boolean = hasModule('react');

export const jsFiles: string[] = [
  '**/*.js',
  '**/*.mjs',
  '**/*.cjs',
  usesJSX && '**/*.jsx',
  usesJSX && '**/*.mjsx'
].filter(isString);

export const tsFiles: string[] = [
  '**/*.ts',
  usesJSX && '**/*.tsx',
  usesJSX && '**/*.mtsx'
].filter(isString);

export const jsxFiles: string[] = [
  '**/*.jsx',
  '**/*.mjsx'
].filter(isString);

export const tsxFiles: string[] = [
  '**/*.tsx',
  '**/*.mtsx'
].filter(isString);
