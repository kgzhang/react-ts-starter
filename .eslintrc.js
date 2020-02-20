module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['airbnb-typescript', 'prettier'],
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        "import/prefer-default-export": 0,
        "react/prop-types": 0
    }
}
