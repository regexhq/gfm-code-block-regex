/*!
 * gfm-code-block-regex <https://github.com/jonschlinkert/gfm-code-block-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var re = require('./');

describe('code block', function () {
  it('should return the code blocks from the fixture.', function () {
  	var match = re().exec('foo\n```sh\nnpm install micromatch --save-dev\n```\nbar');
    assert(Array.isArray(match));
    assert.deepEqual(match.slice(), [
      '```sh\nnpm install micromatch --save-dev\n```',
      '```sh\nnpm install micromatch --save-dev\n```',
      '```',
      'sh',
      '\nnpm install micromatch --save-dev\n',
      '```'
    ]);
  });

  it('should get the language from a code block.', function () {
    var match = re().exec('foo\n```sh\nnpm install micromatch --save-dev\n```\nbar');
    assert.equal(match[3], 'sh');
  });

  it('should work when gfm blocks are in code comments', function () {
    var match = re().exec([
      'Some text',
      '',
      '```js',
      '/**',
      ' * This is a comment with',
      ' * several lines of text.',
      ' *',
      ' * An example',
      ' *',
      ' * ```js',
      ' * var foo = bar;',
      ' * var foo = bar;',
      ' * var foo = bar;',
      ' * ```',
      ' */',
      '```',
      'More text',
    ].join('\n'));

    assert.equal(match[1], [
      '```js',
      '/**',
      ' * This is a comment with',
      ' * several lines of text.',
      ' *',
      ' * An example',
      ' *',
      ' * ```js',
      ' * var foo = bar;',
      ' * var foo = bar;',
      ' * var foo = bar;',
      ' * ```',
      ' */',
      '```',
    ].join('\n'));
    assert.equal(match[3], 'js');
  });

  it('should work with indented gfm blocks', function () {
    var match = re().exec([
      'Some text',
      '',
      '  ```js',
      '  /**',
      '   * This is a comment with',
      '   * several lines of text.',
      '   *',
      '   * An example',
      '   *',
      '   * ```js',
      '   * var foo = bar;',
      '   * var foo = bar;',
      '   * var foo = bar;',
      '   * ```',
      '   */',
      '  ```',
      'More text',
    ].join('\n'));

    assert.equal(match[1], [
      '  ```js',
      '  /**',
      '   * This is a comment with',
      '   * several lines of text.',
      '   *',
      '   * An example',
      '   *',
      '   * ```js',
      '   * var foo = bar;',
      '   * var foo = bar;',
      '   * var foo = bar;',
      '   * ```',
      '   */',
      '  ```',
    ].join('\n'));
    assert.equal(match[3], 'js');
  });

  it('should get a code block', function () {
    var match = re().exec('random text \n```js\nfoo\n```\n more random text');
    assert.equal(match[1], '```js\nfoo\n```');
  });

  it('should get the language from a code block.', function () {
    var match = re().exec('random text \n```js\nfoo\n```\n more random text');
    assert.equal(match[3], 'js');
  });

  it('should get the code from a code block.', function () {
    var match = re().exec('random text \n```js\nfoo\n```\n more random text');
    assert.equal(match[4], '\nfoo\n');
  });
});
