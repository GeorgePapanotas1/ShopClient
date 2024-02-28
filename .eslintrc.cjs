/*
* https://eslint.org/
* https://eslint.vuejs.org/
* https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code
* */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: { parser: '@typescript-eslint/parser' },
    plugins: ['vue', 'simple-import-sort', 'sort-keys-fix', '@typescript-eslint'],
    root: true,
    rules: {
        'array-element-newline': [1, 'consistent'],
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': [1, 'as-needed'],
        'arrow-spacing': ['error', { after: true, before: true }],
        camelcase: 'error',
        'comma-dangle': [1, 'always-multiline'],
        'comma-spacing': [1, { after: true, before: false }],
        'consistent-return': ['error'],
        curly: 'error',
        indent: ['warn', 4, { SwitchCase: 1 }],
        'keyword-spacing': ['error', { after: true }],
        'max-len': ['error', { code : 120, ignoreComments: true, ignoreTemplateLiterals: true, tabWidth: 4 }],
        'max-lines': ['error', { max: 240, skipBlankLines: true, skipComments: true }],
        'multiline-ternary': ['error', 'always-multiline'],
        'no-multi-spaces': [1],
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
        'no-nested-ternary': ['error'],
        'no-trailing-spaces': 1,
        'no-unused-vars': 1,
        'object-curly-spacing': ['error', 'always'],
        'padding-line-between-statements': [
            1,
            { blankLine: 'always', next: 'return', prev: '*' },
            { blankLine: 'always', next: '*', prev: ['const', 'let'] },
            { blankLine: 'always', next: '*', prev: ['case', 'default'] },
            { blankLine: 'always', next: ['multiline-const'], prev: ['const', 'let'] },
            {
                blankLine: 'never',
                next: ['singleline-const', 'singleline-let'],
                prev: ['singleline-const', 'singleline-let'],
            },
        ],
        'quote-props': [1, 'as-needed'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'simple-import-sort/exports': 1,
        'simple-import-sort/imports': 1,
        'sort-keys-fix/sort-keys-fix': 'warn',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': [1, 'never'],
        'space-infix-ops': 1,
        // https://eslint.vuejs.org/rules/multi-word-component-names.html
        'vue/attributes-order': ['error', {

            alphabetical: false,
            // https://eslint.vuejs.org/rules/attributes-order.html
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                ['UNIQUE', 'SLOT'],
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT',
            ],
        }],

        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            ignores: ['/^component/'], registeredComponentsOnly: false,
        }],

        'vue/component-tags-order': ['error', { // https://eslint.vuejs.org/rules/component-tags-order.html
            order: ['template', 'script', 'style'],
        }],


        'vue/html-indent': ['error', 4],


        'vue/max-attributes-per-line': ['error', { multiline : { max: 1 }, singleline: { max: 3 } }],


        // https://eslint.vuejs.org/rules/script-indent.html
        'vue/multi-word-component-names': ['off'],


        'vue/no-reserved-component-names': ['off', {
            disallowVue3BuiltInComponents: true,
            disallowVueBuiltInComponents: true,
        }],

        'vue/no-unused-components': [1, {
            ignoreWhenBindingPresent: false,
        }],

        'vue/order-in-components': ['error', {
            // https://eslint.vuejs.org/rules/order-in-components.html
            order: [
                'name',
                [
                    'components',
                    'directives',
                    'filters',
                ],
                'mixins',
                'validate',
                [
                    'props',
                    'propsData',
                ],
                'data',
                'computed',
                'watch',
                'methods',
                'LIFECYCLE_HOOKS',
            ],
        }],
        // https://eslint.vuejs.org/rules/html-indent.html
        // 'vue/script-indent': ['warn', 4],
        'vue/this-in-template': ['error', 'never'],
    },
};
