// =============================================================================
// eslint-plugin exports
// =============================================================================

import fileHeader from './file-header';
import importOrder from './import-order';
import type {ESLint} from 'eslint';


export const rules: ESLint.Plugin['rules'] = {
  'file-header': fileHeader,
  'import-order': importOrder
};
