'use strict';

/**
 * Converts all adjacent whitespace characters to a single space.
 *
 * @param {String} subjectString The string to process.
 * @throws {TypeError} If `subjectString` is not string.
 * @returns {String} The final string with all adjacent whitespace converted to single space.
 * @example
 *
 * collapseWhitespace('  Lorem   \t ispum dolor sit      \t amet.  ');
 * // => 'Lorem ispum dolor sit amet.'
 */
const collapseWhitespace = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return subjectString.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
};

module.exports = collapseWhitespace;
