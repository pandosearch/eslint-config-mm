'use strict';
module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs', {
      allowSingleLine: true
    }],
    camelcase: [2, {
      properties: 'always'
    }],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    curly: 2,
    'dot-notation': 2,
    'eol-last': 2,
    eqeqeq: [2, 'smart'],
    indent: [2, 2, {
      SwitchCase: 1
    }],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': 2,
    'max-depth': [1, 3],
    'max-len': [2, 120, 2],
    'new-cap': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-else-return': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-parens': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, {
      max: 2
    }],
    'no-native-reassign': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-redeclare': [2, {
      builtinGlobals: true
    }],
    'no-return-assign': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-sync': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-unused-expressions': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-void': 2,
    'no-with': 2,
    'object-curly-spacing': [2, 'never'],
    'one-var': [2, 'never'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single', 'avoid-escape'],
    radix: 2,
    semi: [2, 'always'],
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'never'
    }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always'],
    strict: [2, 'global']
  }
};
