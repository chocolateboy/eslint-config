'use strict';

// this is mostly copied from: https://raw.githubusercontent.com/alexdiliberto/eslint-config/master/test/validate-config.js

const test      = require('ava')
const CLIEngine = require('eslint').CLIEngine
const rules     = require('../index.js').rules

// Source files to lint
const files = ['index.js']

// Test against the rules defined in this repo
const eslintOpts = {
    useEslintrc: false,
    envs: ['node', 'es6'],
    parserOptions: { ecmaVersion: 2017 },
    rules
}

const cli = new CLIEngine(eslintOpts)

test.cb('validate rules', t => {
    // Runs the linter on the repo files and asserts no errors
    const report = cli.executeOnFiles(files)

    t.plan(4)
    t.is(report.errorCount, 0, 'report.errorCount === 0')
    t.is(report.fixableErrorCount, 0, 'report.fixableErrorCount === 0')
    t.is(report.warningCount, 0, 'report.warningCount === 0')
    t.is(report.fixableWarningCount, 0, 'report.fixableWarningCount === 0')
    t.end()
})
