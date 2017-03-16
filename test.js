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
  	var match = re().exec('foo\n```bash\nnpm i helper-loader --save-dev\n```\nbar');
    assert(Array.isArray(match));
    assert.deepEqual(match.slice(), [
      '```bash\nnpm i helper-loader --save-dev\n```',
      '```bash\nnpm i helper-loader --save-dev\n```',
      '```',
      'bash',
      '\nnpm i helper-loader --save-dev\n',
      '```'
    ]);
  });

  it('should get the language from a code block.', function () {
    var match = re().exec('foo\n```bash\nnpm i helper-loader --save-dev\n```\nbar');
    assert.equal(match[3], 'bash');
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
