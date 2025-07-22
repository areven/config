// =============================================================================
// eslint-plugin exports
// =============================================================================

import type {ESLint} from 'eslint';
import importOrder from './import-order';


export const rules: ESLint.Plugin['rules'] = {
  'import-order': importOrder
};
