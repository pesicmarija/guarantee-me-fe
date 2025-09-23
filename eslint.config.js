// eslint.config.js
const { defineConfig } = require('eslint/config');
const importPlugin = require('eslint-plugin-import');
const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.json'],
        },
      },
    },
    rules: {
      // your base asks
      semi: 'error',
      'prefer-const': 'error',

      // React 17+ JSX transform (no need to import React)
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',

      // max line length
      'max-len': ['warn', { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],

      // unused vars, but allow object rest siblings
      'no-unused-vars': ['error', { ignoreRestSiblings: true }],

      // don’t require file extensions in imports for js/jsx
      'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never' }],

      // import grouping & ordering
      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      }],
    },
  },
]);