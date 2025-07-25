// =============================================================================
// TypeScript preset
// =============================================================================

import type {Linter} from 'eslint';


export const eslintPresetTypeScript: Linter.RulesRecord = {
  'dot-notation': 'off',
  'no-array-constructor': 'off',
  'no-implied-eval': 'off',
  'no-loss-of-precision': 'off',
  'no-redeclare': 'off',
  'no-throw-literal': 'off',
  'no-useless-constructor': 'off',
  'prefer-promise-reject-errors': 'off',

  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': ['error', {minimumDescriptionLength: 10}],
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/class-literal-property-style': 'error',
  '@typescript-eslint/consistent-indexed-object-style': 'error',
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/explicit-function-return-type': ['error', {
    allowExpressions: true,
    allowTypedFunctionExpressions: true,
    allowIIFEs: true,
    allowHigherOrderFunctions: true
  }],
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-array-delete': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': ['error', {ignoreArrowShorthand: true}],
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-empty-object-type': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-mixed-enums': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  // '@typescript-eslint/no-unnecessary-type-assertion': 'error', <- broken
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-function-type': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/no-wrapper-object-types': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  // '@typescript-eslint/only-throw-error': 'error', <- suspense requires throwing promises
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-find': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/restrict-plus-operands': ['error', {
    allowAny: false,
    allowBoolean: false,
    allowNullish: false,
    allowNumberAndString: true,
    allowRegExp: false
  }],
  '@typescript-eslint/restrict-template-expressions': ['error', {
    allowAny: true,
    allowBoolean: true,
    allowNullish: true,
    allowNumber: true,
    allowRegExp: true
  }],
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/typedef': ['error', {
    parameter: true,
    propertyDeclaration: true,
    memberVariableDeclaration: true
  }],
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error'
};
