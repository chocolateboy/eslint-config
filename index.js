// the following modules are required as peer dependencies of
// eslint-config-standard:
//
//   - eslint-plugin-import
//   - eslint-plugin-node
//   - eslint-plugin-promise
//   - eslint-plugin-standard

'use strict';

// override standard's defaults
module.exports = {
    // some of these are set by eslint-config-standard, but
    // it's clearer if they're spelled out in one place
    env: {
        // browser: true,
        commonjs: true,
        es6: true,
        greasemonkey: true,
        jquery: true,
        node: true,
    },
    extends: [
        'standard',
    ],
    parser: 'babel-eslint',
    root: true, // don't look for additional rules in parent directories
    rules: {
        // only allow trailing commas in multi-line expressions
        // (override eslint-config-standard's "never")
        'comma-dangle': ['error', 'only-multiline'],

        // prefer
        //
        //     function foo () { ... }
        //
        // over
        //
        //     const foo = function () { ... }
        //
        // but allow arrow functions e.g.
        //
        //     const foo = bar => baz
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

        // replace standard's 2-spaced indents with 4 spaces
        indent: ['error', 4],

        // prohibit multiple spaces unless they're used to align requires,
        // imports, or object literals
        'key-spacing': 0,
        'no-multi-spaces': [
            'error',
            {
                exceptions: {
                    ImportDeclaration: true,
                    Property: true,
                    VariableDeclarator: true
                }
            }
        ],

        // don't care if multiple vars are initialised with
        // a single statement
        'one-var': 0,


        // don't require operators to be consistently placed at the beginning/end
        // of lines: it varies according to the lines
        'operator-linebreak': 0
    }
}
