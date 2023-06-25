/**
 * ESLint é uma ferramenta de análise estática de código JavaScript e TypeScript.
 * Seu principal objetivo é encontrar e corrigir problemas automaticamente, de
 * acordo com as regras definidas neste arquivo.
 * Docs: https://eslint.org/docs/latest/use/getting-started
 */

module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': ['error', {
      allow: ['warn', 'error'],
    }],
  },
};
