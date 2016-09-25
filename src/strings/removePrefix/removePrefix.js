/**
 * Removes prefix from start of a string.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @param {String} [prefix] The prefix substring to remove from the original string.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `prefix` is not string but not if is `null` or `undefined`.
 * @return {String} The result string.
 * @example
 *
 * removePrefix('__foo', '__');
 * // -> 'foo'
 *
 * removePrefix('__foobar', '??');
 * // -> 'foobar'
 *
 * removePrefix('__foobar');
 * // -> 'foobar'
 *
 * removePrefix('__foobar', {});
 * // -> TypeError
 */
function removePrefix(subjectString, prefix) {
  'use strict';

  if (typeof subjectString !== 'string' || typeof prefix !== 'string' && prefix != null) {
    throw new TypeError('Expected a string');
  }

  return subjectString.indexOf(prefix) === 0 ? subjectString.slice(prefix.length) : subjectString;
}
