module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'standard',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
        'vue/multi-word-component-names': 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            },
        ],
        'no-unused-vars': 'warn',
        'no-new': 'off',
        'no-undef': 'off',
    },
}
