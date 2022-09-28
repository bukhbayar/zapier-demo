module.exports = {
    extends: ['prettier', 'plugin:import/typescript'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'sort-imports-es6-autofix'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'import/no-extraneous-dependencies': ['error'],
        'sort-imports-es6-autofix/sort-imports-es6': ['error']
    },
    parserOptions: {
        sourceType: 'module',
        project: ['tsconfig.json', 'test/tsconfig.json']
    },
    root: true
}
