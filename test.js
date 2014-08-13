/*!
 * gfm-code-block-regex <https://github.com/jonschlinkert/gfm-code-block-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var helpers = require('test-helpers')();
var re = require('..')();

describe('code block', function () {
  it('should return the code block.', function () {
  	var readme = helpers.readFixture('README.md');
  	var blocks = readme.match(re);

    console.log(blocks)
    // assert.equal(actual);
  });
});