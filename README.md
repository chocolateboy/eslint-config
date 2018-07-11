# eslint-config

[![Build Status](https://secure.travis-ci.org/chocolateboy/eslint-config.svg)](https://travis-ci.org/chocolateboy/eslint-config)
[![NPM Version](https://img.shields.io/npm/v/@chocolateboy/eslint-config.svg)](https://www.npmjs.org/package/@chocolateboy/eslint-config)

My [shareable](https://eslint.org/docs/developer-guide/shareable-configs) [ESLint](https://eslint.org/) config.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [INSTALL](#install)
- [USAGE](#usage)
- [DESCRIPTION](#description)
- [DEVELOPMENT](#development)
  - [NPM Scripts](#npm-scripts)
- [SEE ALSO](#see-also)
- [VERSION](#version)
- [AUTHOR](#author)
- [COPYRIGHT AND LICENSE](#copyright-and-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# INSTALL

    $ npm install @chocolateboy/eslint-config

# USAGE

Add this to your .eslintrc.js (or equivalent) file:

```js
module.exports = {
    extends: ["@chocolateboy"]
}
```

# DESCRIPTION

This is mostly compatible with the [StandardJS rules](https://standardjs.com/#standardjs--the-rules). The main differences are:

- 4 spaces (rather than 2)
- dangling commas are allowed in multi-line lists
- multiple spaces are allowed in requires/imports and object literals

# DEVELOPMENT

<details>

## NPM Scripts

The following NPM scripts are available:

* test - validate the ESLint rules

</details>

# SEE ALSO

* [eslint](https://www.npmjs.com/package/eslint) - An AST-based pattern checker for JavaScript
* [eslint-standard](https://www.npmjs.com/package/eslint-config-standard) - An ESLint Shareable Config for JavaScript Standard Style
* [standard](https://www.npmjs.com/package/standard) - JavaScript Style Guide, with linter & automatic code fixer

# VERSION

0.0.1

# AUTHOR

[chocolateboy](mailto:chocolate@cpan.org)

# COPYRIGHT AND LICENSE

Copyright © 2018 by chocolateboy.

This is free software; you can redistribute it and/or modify it under the
terms of the [Artistic License 2.0](https://www.opensource.org/licenses/artistic-license-2.0.php).
