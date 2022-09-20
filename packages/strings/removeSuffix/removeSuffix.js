'use strict';

/**
 * Removes suffix from start of a string.
 *
 * @param {String} subjectString The original string.
 * @param {String} [suffix] The suffix substring to remove from the original string.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `suffix` is not string but not if is `undefined`.
 * @returns {String} The result string.
 * @example
 *
 * removeSuffix('foobar__', '__');
 * // => 'foo'
 *
 * removeSuffix('foobar__', '??');
 * // => 'foobar'
 *
 * removeSuffix('foobar__');
 * // => 'foobar'
 *
 * removeSuffix('foobar__', {});
 * // => TypeError
 */
const removeSuffix = (subjectString, suffix) => {
  if (typeof subjectString !== 'string' || typeof suffix !== 'string' && typeof suffix !== 'undefined') {
    throw new TypeError('Expected a string for first and second argument argument');
  }

  const strLen = subjectString.length;
  const suffixLen = suffix ? suffix.length : 0;

  return subjectString.indexOf(suffix, strLen - suffixLen) !== -1
    ? subjectString.slice(0, strLen - suffixLen)
    : subjectString;
};

module.exports = removeSuffix;
