/**
 * Returns a substring before a specific sequence of character(s).
 * By default looks for the first occurrence of this sequence.
 * If the character or sequence of characters not found, returns the initial string.
 *
 * @category String
 * @NOTE For legacy browsers' support use `String.prototype.lastIndexOf`
 * @param {String} subjectString The string to process.
 * @param {String} characters The seqquence of characters to use as delimiter.
 * @param {Boolean} [last=false] If true or any truthy value, will look for the last occurence of the characters specified.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `characters` is not string.
 * @return {string} The result string.
 * @example
 *
 * subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', '_');
 * // -> 'LOREM'
 *
 * subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
 * // -> 'LOREM_IPSUM DOLOR'
 *
 * subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', 'SIT');
 * // -> 'LOREM_IPSUM DOLOR_'
 *
 * subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', '?', true);
 * // -> 'LOREM_IPSUM DOLOR_SIT AMET'
 *
 * subStrBefore('LOREM_IPSUM DOLOR_SIT AMET');
 * // -> Throws TypeError
 */
function subStrBefore(subjectString, characters, last) {
  'use strict';

  var index;

  if (typeof subjectString !== 'string' || typeof characters !== 'string') {
    throw new TypeError('Expected a string');
  }

  index = !last ? subjectString.indexOf(characters) : subjectString.lastIndexOf(characters);

  return !!~index && index !== 0 ? subjectString.substr(0, index) : subjectString;
}
