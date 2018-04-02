'use strict';

module.exports = {
  root: true,
  extends: ['../node_modules/sanctuary-style/eslint-es6.json'],
  env: {node: true},
  rules: {
    'func-call-spacing': ['error', 'always', {allowNewlines: true}],
    'indent': require ('./rules/indent'),
    'no-extra-parens': ['off'],
    'no-unexpected-multiline': ['off'],
  }
};
