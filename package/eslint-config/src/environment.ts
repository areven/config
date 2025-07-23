// =============================================================================
// eslint-config environment
// =============================================================================

import {hasModule, isString} from './util';


export const usesTypeScript: boolean = hasModule('typescript');
export const usesJSX: boolean = hasModule('react');

export const jsFiles: string[] = [
  '**/*.js',
  usesJSX && '**/*.jsx'
].filter(isString);

export const tsFiles: string[] = [
  '**/*.ts',
  usesJSX && '**/*.tsx'
].filter(isString)
