module.exports = {
  extends: ['prettier', 'prettier/react'],
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: 'module'
  },
  settings: {
    ecmaScript: 6,
    jsx: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: true
      }
    ],
    quotes: ['error', 'single']
  },
  plugins: ['react', 'prettier']
};
