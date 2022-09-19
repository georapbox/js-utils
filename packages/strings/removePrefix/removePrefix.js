'use strict';

/**
 * Removes prefix from start of a string.
 *
 * @param {String} subjectString The string to process.
 * @param {String} [prefix] The prefix substring to remove from the original string.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `prefix` is not string but not if is `undefined`.
 * @returns {String} The result string.
 * @example
 *
 * removePrefix('__foo', '__');
 * // => 'foo'
 *
 * removePrefix('__foobar', '??');
 * // => 'foobar'
 *
 * removePrefix('__foobar');
 * // => 'foobar'
 *
 * removePrefix('__foobar', {});
 * // => TypeError
 */
const removePrefix = (subjectString, prefix) => {
  if (typeof subjectString !== 'string' || typeof prefix !== 'string' && typeof prefix !== 'undefined') {
    throw new TypeError('Expected all arguments to be strings');
  }

  return subjectString.indexOf(prefix) === 0 ? subjectString.slice(prefix.length) : subjectString;
};

module.exports = removePrefix;
