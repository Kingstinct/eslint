/* eslint-disable import/no-unused-modules */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint:recommended',
    'plugin:promise/recommended',
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  plugins: [
    'import',
    'lodash-fp',
    'promise',
    'jest',
    'json',
  ],
  rules: {
    'class-methods-use-this': 1,
    'comma-dangle': ['error', 'always-multiline'],
    'global-require': 2,
    'import/max-dependencies': [1, { max: 15 }],
    'import/newline-after-import': [1, { count: 2 }],
    'import/no-cycle': [2, { maxDepth: 2 }],
    'import/no-unused-modules': [1, { unusedExports: true, missingExports: true }],
    'import/no-useless-path-segments': 2,
    'import/order': ['error', { 'newlines-between': 'always', 'groups': [['builtin', 'external'], ['parent', 'sibling', 'index']] }],
    'import/prefer-default-export': 1,
    'indent': ['error', 2, { VariableDeclarator: { var: 2, let: 2, const: 3 } }],
    'jsx-a11y/accessible-emoji': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'lodash-fp/use-fp': 2,
    'max-len': 1,
    'no-confusing-arrow': 0,
    'no-extra-parens': ['error', 'all', { ignoreJSX: 'all', enforceForArrowConditionals: false, nestedBinaryExpressions: false }],
    'no-nested-ternary': 0,
    'no-return-assign': 0,
    'no-underscore-dangle': 1,
    'no-unused-expressions': 0,
    'no-useless-computed-key': 2,
    'one-var': 0,
    'promise/always-return': 1,
    'promise/catch-or-return': 1,
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'sort-vars': 0,
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
/* eslint-enable import/no-unused-modules */
