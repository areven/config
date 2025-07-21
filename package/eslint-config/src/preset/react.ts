// =============================================================================
// React preset
// =============================================================================

import type {Linter} from 'eslint';


export const eslintPresetReact: Linter.RulesRecord = {
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-curly-brace-presence': ['error', 'never'],
  'react/jsx-curly-spacing': ['error', {when: 'never', children: true}],
  'react/jsx-equals-spacing': ['error', 'never'],
  'react/jsx-indent': ['error', 2],
  'react/jsx-indent-props': ['error', 2],
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-target-blank': 'error',
  'react/jsx-no-undef': ['error', {allowGlobals: true}],
  'react/jsx-pascal-case': ['error', {allowAllCaps: true}],
  'react/jsx-tag-spacing': ['error', {
    afterOpening: 'never',
    closingSlash: 'never',
    beforeClosing: 'never',
    beforeSelfClosing: 'never'
  }],
  'react/jsx-uses-vars': 'error',
  'react/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line'
  }],
  'react/no-danger-with-children': 'error',
  'react/no-direct-mutation-state': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-is-mounted': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-string-refs': 'error',
  'react/no-unknown-property': 'error',
  'react/require-render-return': 'error'
};
