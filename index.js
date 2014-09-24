/*!
 * gfm-code-block-regex <https://github.com/jonschlinkert/gfm-code-block-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function() {
  return /^((`{3}\s*)(\w+)?(\s*([\w\W]+?)\n*)\2)\n*(?:[^\S\w\s]|$)/gm;
};