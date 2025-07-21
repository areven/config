// =============================================================================
// eslint-config core
// =============================================================================

import path from 'node:path';


export {eslintConfig as default} from './config';
export * from './environment';
export * from './preset/import';
export * from './preset/javascript';
export * from './preset/react';
export * from './preset/react-hooks';
export * from './preset/typescript';

const rulesdirPlugin = require('eslint-plugin-rulesdir') as any;
rulesdirPlugin.RULES_DIR = path.join(__dirname, './rule');
