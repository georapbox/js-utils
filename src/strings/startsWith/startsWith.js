/**
 * Determines whether a string begins with the characters of another string.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @param {String} searchString The characters to be searched for at the start of the string.
 * @param {Number} [position=0] The position in the original string at which to begin searching for `prefix`.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {Boolean} True if `subjectString` starts with `searchString`, else false.
 *
 * @example
 *
 * var str = 'Lorem ipsum dolor sit amet';
 *
 * startsWith(str, 'Lorem');
 * // -> true
 *
 * startsWith(str, 'Lorem', 0);
 * // -> true
 *
 * startsWith(str, 'ipsum');
 * // -> false
 *
 * startsWith(str, 'orem', 1);
 * // -> true
 */
function startsWith(subjectString, searchString, position) {
  'use strict';

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (searchString == null) {
    return false;
  }

  if (String.prototype.startsWith) {
    return subjectString.startsWith(searchString, position);
  }

  subjectString = subjectString.toString();
  searchString = searchString.toString();
  position = position || 0;

  return subjectString.substr(position, searchString.length) === searchString;
}
