/*!
 * gfm-code-block-regex <https://github.com/jonschlinkert/gfm-code-block-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var helpers = require('test-helpers')({dir: './'});
var re = require('./')();

describe('code block', function () {
  it('should return the code blocks from the fixture.', function () {
  	var readme = helpers.readFixture('README.md');
  	var blocks = readme.match(re);

    assert.equal(Array.isArray(blocks), true);
    assert.equal(blocks.length, 7);
  });

  it('should get the language from a code block.', function () {
  	var readme = helpers.readFixture('README.md');
  	var blocks = readme.match(re);
    assert.equal(RegExp.$3, 'js');
  });

  it('should get a code block.', function () {
    var blocks = ('random text \n```js\nfoo\n```\n more random text').match(re);
    assert.equal(RegExp.$1, '```js\nfoo\n```');
  });

  it('should get the language from a code block.', function () {
    var blocks = ('random text \n```js\nfoo\n```\n more random text').match(re);
    assert.equal(RegExp.$3, 'js');
  });

  it('should get the code from a code block.', function () {
    var blocks = ('random text \n```js\nfoo\n```\n more random text').match(re);
    assert.equal(RegExp.$4, '\nfoo\n');
  });

  it('should get the trimmed code from a code block.', function () {
    var blocks = ('random text \n```js\nfoo\n```\n more random text').match(re);
    assert.equal(RegExp.$5, 'foo');
  });
});