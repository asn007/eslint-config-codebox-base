module.exports = {
  env: {
    es6: true,
    browser: true,
    'shared-node-browser': true,
  },
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'prettier',
    'import',
  ],
  rules: {
    strict: 'off',
    semi: ['error', 'never'],
    curly: ['error', 'multi'],
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'no-underscore-dangle': 'off',
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5',
      jsxBracketSameLine: true,
      semi: false,
      printWidth: 100
    }],
  }
}
