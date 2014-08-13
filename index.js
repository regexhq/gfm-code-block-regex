/*!
 * gfm-code-block-regex <https://github.com/jonschlinkert/gfm-code-block-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function() {
  return /(`{3})[ \t]*(\S+)?[ \t]*([\s\S]+?)\s*\1[ \t]*(?:[^\n]|$)/gm;
};
