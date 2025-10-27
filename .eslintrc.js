module.exports = {
  root: true,
  env: {
    commonjs: true,
    // es2024: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12
  },
  noInlineConfig: true,
};
