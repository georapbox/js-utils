/**
 * Returns a substring denoted by n (positive or negative) characters.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @param {Number} [n] The number of characters of the new string.
 *        If `n >= 0`, returns a substring from the left end of the string.
 *        If `n < 0`, returns a substring from the right end of the string.
 *        If `n` is not of type number, returns the whole string intact.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The result string.
 * @example
 *
 * var str = 'Lorem ispum dolor sit amet.';
 *
 * subStr(str, 5));
 * // -> 'Lorem'
 *
 * subStr(str, -3));
 * // -> 'et.'
 *
 * subStr(str, 0));
 * // -> ''
 *
 * subStr(str, parseInt('-4', 10)));
 * // -> 'met.'
 *
 * subStr(str, 'hello'));
 * // -> 'Lorem ispum dolor sit amet.'
 */
function subStr(subjectString, n) {
  'use strict';

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (typeof n === 'number') {
    return n >= 0 ?
    subjectString.substr(0, n) :
    subjectString.substr(subjectString.length + n, -n);
  }

  return subjectString;
}
