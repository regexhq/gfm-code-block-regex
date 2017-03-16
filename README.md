# gfm-code-block-regex [![NPM version](https://img.shields.io/npm/v/gfm-code-block-regex.svg?style=flat)](https://www.npmjs.com/package/gfm-code-block-regex) [![NPM monthly downloads](https://img.shields.io/npm/dm/gfm-code-block-regex.svg?style=flat)](https://npmjs.org/package/gfm-code-block-regex)  [![NPM total downloads](https://img.shields.io/npm/dt/gfm-code-block-regex.svg?style=flat)](https://npmjs.org/package/gfm-code-block-regex) [![Linux Build Status](https://img.shields.io/travis/regexhq/gfm-code-block-regex.svg?style=flat&label=Travis)](https://travis-ci.org/regexhq/gfm-code-block-regex)

> RegExp for gfm (GitHub Flavored Markdown) fenced code blocks.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save gfm-code-block-regex
```

## Usage

```js
var re = require('gfm-code-block-regex');

var match = re().exec('random text \n```js\nfoo\n```\n more random text');
console.log(match);
```

Returns:

```js
[ '```sh\nnpm install micromatch --save-dev\n```',
  '```sh\nnpm install micromatch --save-dev\n```',
  '```',
  'sh',
  '\nnpm install micromatch --save-dev\n',
  '```',
  index: 4,
  input: 'foo\n```sh\nnpm install micromatch --save-dev\n```\nbar' ]
```

## Heads up!

Note that if a gfm code block has a javascript block comment inside of it, and within the block comment is another gfm code block, it will fail if the block comment does not have leading stars.

**Examples**

This should work:

<pre>
```js
/**
 * This is a comment with
 * several lines of text.
 *
 * An example
 *
 * ```js
 * var foo = bar;
 * var foo = bar;
 * var foo = bar;
 * ```
*/
```
</pre>

This will not work (note the absence of leading stars inside the comment):

<pre>
```js
/**
  This is a comment with
  several lines of text.

  An example

  ```js
  var foo = bar;
  var foo = bar;
  var foo = bar;
  ```
 */
```
</pre>

Although the previous example is perfectly valid, regex alone is not sufficient.

## About
### Related projects
- [extract-gfm](https://www.npmjs.com/package/extract-gfm): Utilities for extracting and replacing GitHub Flavored Markdown code blocks. For example, you could easily… [more](https://github.com/jonschlinkert/extract-gfm) | [homepage](https://github.com/jonschlinkert/extract-gfm "Utilities for extracting and replacing GitHub Flavored Markdown code blocks. For example, you could easily find code blocks for a specific language and run the code through a linter.")
- [gfm-code-blocks](https://www.npmjs.com/package/gfm-code-blocks): Extract gfm (GitHub Flavored Markdown) fenced code blocks from a string. | [homepage](https://github.com/jonschlinkert/gfm-code-blocks "Extract gfm (GitHub Flavored Markdown) fenced code blocks from a string.")
- [to-gfm-code-block](https://www.npmjs.com/package/to-gfm-code-block): Generate a github-flavored-markdown fenced-code-block snippet. | [homepage](https://github.com/jonschlinkert/to-gfm-code-block "Generate a github-flavored-markdown fenced-code-block snippet.")

### Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

### Release history

### Building docs
_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.3, on March 16, 2017._