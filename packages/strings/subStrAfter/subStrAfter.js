'use strict';

/**
 * Returns a substring after a specific sequence of character(s).
 * By default looks for the first occuerence of this sequence.
 * If the character or sequence of characters not found, returns the initial string.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @param {String} characters The seqquence of characters to use as delimiter.
 * @param {Boolean} [last=false] If true or any truthy value, will look for the last occurence of the characters specified.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `characters` is not string.
 * @return {String} The result string.
 * @example
 *
 * subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '_');
 * // -> 'IPSUM DOLOR_SIT AMET'
 *
 * subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
 * // -> 'SIT AMET'
 *
 * subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', 'SIT ');
 * // -> 'AMET'
 *
 * subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '?', true);
 * // -> 'LOREM_IPSUM DOLOR_SIT AMET'
 */
function subStrAfter(subjectString, characters, last) {
  var arr, len;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string as first argument');
  }

  if (typeof characters !== 'string') {
    throw new TypeError('Expected a string as second argument');
  }

  if (!last) {
    return subjectString.substr(subjectString.indexOf(characters) + characters.length);
  }

  arr = subjectString.split(characters);
  len = arr.length;
  return arr[len - 1];
}

module.exports = subStrAfter;