// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-trailing-spaces': ['warn'],
    'no-unused-vars': ['warn'],
    indent: [
      'warn',
      2,
      { SwitchCase: 1 },
    ],
  },
};