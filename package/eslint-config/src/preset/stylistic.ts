// =============================================================================
// Stylistic preset
// =============================================================================

import type {Linter} from 'eslint';


export const eslintPresetStylistic: Linter.RulesRecord = {
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
  '@stylistic/arrow-spacing': 'error',
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/brace-style': ['error', '1tbs', {allowSingleLine: true}],
  '@stylistic/comma-dangle': ['error', 'never'],
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/computed-property-spacing': ['error', 'never'],
  '@stylistic/dot-location': ['error', 'property'],
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/function-call-spacing': ['error', 'never'],
  '@stylistic/generator-star-spacing': ['error', 'before'],
  '@stylistic/indent': ['error', 2, {SwitchCase: 1}],
  '@stylistic/jsx-quotes': ['error', 'prefer-single'],
  '@stylistic/key-spacing': ['error'],
  '@stylistic/keyword-spacing': ['error'],
  '@stylistic/linebreak-style': ['error'],
  '@stylistic/max-len': ['error', 120, 2],
  '@stylistic/max-statements-per-line': ['error', {max: 1}],
  '@stylistic/new-parens': 'error',
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-operators': [
    'error', {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }
  ],
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': ['error', {exceptions: {Property: false}}],
  '@stylistic/no-multiple-empty-lines': ['error', {max: 2, maxBOF: 0, maxEOF: 0}],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/object-curly-spacing': ['error', 'never'],
  '@stylistic/operator-linebreak': ['error', 'after'],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/quotes': ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
  '@stylistic/rest-spread-spacing': ['error', 'never'],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/semi-spacing': 'error',
  '@stylistic/space-before-blocks': ['error', 'always'],
  '@stylistic/space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],
  '@stylistic/space-in-parens': 'error',
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': ['error', {words: true, nonwords: false}],
  '@stylistic/spaced-comment': ['error', 'always'],
  '@stylistic/template-curly-spacing': ['error', 'never'],
  '@stylistic/yield-star-spacing': 'error'
};
