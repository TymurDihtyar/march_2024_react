module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Add TypeScript support
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser', // Use the TypeScript parser
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // Ensure the correct tsconfig.json is used
  },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh',
    'simple-import-sort',
    'prettier',
    '@typescript-eslint' // Add TypeScript plugin
  ],
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "max-len": ["error", { code: 180 }],
    "prettier/prettier": [
      "error",
      {
        printWidth: 180,
      },
    ],
    "@typescript-eslint/no-unused-vars": ["error"] // Example TypeScript rule
  },
}
