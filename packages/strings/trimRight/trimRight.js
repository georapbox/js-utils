'use strict';

/**
 * Removes whitespace from the right end of a string.
 *
 * @category String
 * @param {String} subjectString The string to right trim.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The result string.
 * @example
 *
 * trimLeft('Lorem ipsum dolor si amet.    ');
 * // -> 'Lorem ipsum dolor si amet.'
 */
function trimRight(subjectString) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return String.prototype.trimEnd
    ? subjectString.trimEnd()
    : subjectString.replace(/\s+$/, '');
}

module.exports = trimRight;