// =============================================================================
// stylelint-config configuration
// =============================================================================

import type {Config} from 'stylelint';


const stylelintConfig: Config = {
  defaultSeverity: 'error',
  allowEmptyInput: true,
  reportNeedlessDisables: true,
  rules: {
    'alpha-value-notation': ['percentage', {
      exceptProperties: [
        'opacity',
        'fill-opacity',
        'flood-opacity',
        'stop-opacity',
        'stroke-opacity'
      ]
    }],
    'annotation-no-unknown': true,
    'at-rule-descriptor-no-unknown': true,
    'at-rule-descriptor-value-no-unknown': true,
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment']
    }],
    'at-rule-no-deprecated': true,
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-prelude-no-invalid': [true, {
      ignoreAtRules: ['media']
    }],
    'block-no-empty': true,
    'color-function-alias-notation': 'without-alpha',
    'color-function-notation': 'modern',
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['stylelint-commands']
    }],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'container-name-pattern': ['^(--)?([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {
      message: (name: string) => `Expected container name "${name}" to be kebab-case`
    }],
    'custom-media-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {
      message: (name: string) => `Expected custom media query name "${name}" to be kebab-case`
    }],
    'custom-property-no-missing-var-function': true,
    'custom-property-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {
      message: (name: string) => `Expected custom property name "${name}" to be kebab-case`
    }],
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-syntaxes']
    }],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-keyword-no-deprecated': true,
    'declaration-property-value-no-unknown': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'hue-degree-notation': 'angle',
    'import-notation': 'url',
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'keyframes-name-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {
      message: (name: string) => `Expected keyframe name "${name}" to be kebab-case`
    }],
    'layer-name-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {
      message: (name: string) => `Expected layer name "${name}" to be kebab-case`
    }],
    'length-zero-no-unit': [true, {
      ignore: ['custom-properties']
    }],
    'lightness-notation': 'percentage',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-no-unknown': true,
    'media-feature-range-notation': 'context',
    'media-query-no-invalid': true,
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    'number-max-precision': 4,
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment', 'inside-block']
    }],
    'selector-anb-no-unmatchable': true,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {
      message: (selector: string) => `Expected class selector "${selector}" to be kebab-case`
    }],
    'selector-id-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {
      message: (selector: string) => `Expected id selector "${selector}" to be kebab-case`
    }],
    'selector-no-vendor-prefix': true,
    'selector-not-notation': 'complex',
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: 'global'
    }],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [true, {
      ignore: ['custom-elements']
    }],
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': [true, {
      ignore: ['at-rule-preludes', 'declaration-values']
    }],
    'syntax-string-no-invalid': true,
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': [true, {
      // `-webkit-box` is allowed as standard. See https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
      ignoreValues: ['box', 'inline-box']
    }]
  }
};

export default stylelintConfig;
