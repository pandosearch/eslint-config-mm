'use strict';
module.exports = {
  extends: ['eslint-config-mm/es5'],
  parserOptions: {
    ecmaVersion: 6
  // Can't use ES6 imports yet in node: https://github.com/nodejs/help/issues/53#issuecomment-165763446
  // sourceType: 'module'
  },
  env: {
    es6: true
  },
  rules: {
    'arrow-parens': [2, 'always'],
    'arrow-body-style': [2, 'always'],
    'arrow-spacing': 2,
    'no-const-assign': 2,
    'no-confusing-arrow': 2,
    'no-var': 1,
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-const': 2,
    //  Can't use rest params yet: https://github.com/nodejs/node/issues/5411
    // 'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'template-curly-spacing': [2, 'never']
  }
};
