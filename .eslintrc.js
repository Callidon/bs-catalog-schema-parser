module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
      browser: true,
      jest: true,
  },
  parserOptions: {
      project: './tsconfig.eslint.json',
  },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',

  ],
  plugins: ['@typescript-eslint'],
  settings: {
      'import/ignore': [
          'node_modules',
          'test-utils',
      ],
  },
  globals: {
      global: true,
      $: true,
      L: true,
  },
  rules: {
      'max-len': ['error', 120, 4],
      camelcase: 0,
      'no-plusplus': 0,
      'indent': 'off', // FIXME: enforce consistent indentation (hack). See: https://github.com/typescript-eslint/typescript-eslint/issues/1824
      '@typescript-eslint/indent': ['error', 4, {
          'SwitchCase': 0, // FIXME: https://github.com/typescript-eslint/typescript-eslint/issues/608
      }],
      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      'no-param-reassign': ['error', {
          props: true,
          ignorePropertyModificationsFor: [
              'acc', // for reduce accumulators
              'e', // for e.returnvalue
          ],
      }],
      // allow debugger during development
      'no-underscore-dangle': 0,
      'import/no-named-as-default': 'off',
      // FIXME: With the introduction of TS, these rules cause linter errors (many of them quite justified). For the
      // ... moment, they have been disabled but in the future we could re-enable them and fix the different errors.
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/default-param-last': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      // only run in Jenkins, because it is way too slow for usage during dev
      'import/no-cycle': 'off',
  }
};