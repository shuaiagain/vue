// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'semi': [2, 'always'],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        // "space-before-function-paren": ["error", {
        //     "anonymous": "always",
        //     "named": "always",
        //     "asyncArrow": "always"
        // }],
        "space-before-function-paren": ["error", "always"],
        // 允许在空行使用空白符
        // "skipBlankLines": true,
        // 允许在注释块中使用空白符
        // "ignoreComments": true,
        "no-trailing-spaces": { "skipBlankLines": true }
    }

};