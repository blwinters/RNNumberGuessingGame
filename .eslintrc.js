module.exports = {
  root: true,
  extends: '@react-native-community',
  semi: false,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react-hooks",
    '@typescript-eslint'
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
