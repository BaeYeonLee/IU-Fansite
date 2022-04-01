module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ?'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ?'error' : 'off',
    'vue/multi-word-component-names': 'off',
    'camelcase': 'off',
    'vue/camelcase': 'off',
  },
}
