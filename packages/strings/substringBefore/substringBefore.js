'use strict';

/**
 * Returns a substring before a specific sequence of character(s).
 * By default looks for the first occurrence of this sequence.
 * If the character or sequence of characters not found, returns an empty string.
 *
 * @param {String} subjectString The string to process.
 * @param {String} characters The sequence of characters to use as delimiter. Case sensitivity matters.
 * @param {Boolean} [last] If true or any truthy value, will look for the last occurence of the characters specified.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `characters` is not string.
 * @returns {string} Returns the result string.
 * @example
 *
 * substringBefore('LOREM_IPSUM DOLOR_SIT AMET', '_');
 * // => 'LOREM'
 *
 * substringBefore('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
 * // => 'LOREM_IPSUM DOLOR'
 *
 * substringBefore('LOREM_IPSUM DOLOR_SIT AMET', 'SIT');
 * // => 'LOREM_IPSUM DOLOR_'
 *
 * substringBefore('LOREM_IPSUM DOLOR_SIT AMET', '???', true); // using a sequense of characters that does not exist
 * // => ''
 *
 * substringBefore('🍎🍐🍊🍌🍉🍇🍓', '🍊');
 * // => '🍎🍐'
 *
 * substringBefore('🍎🍐🍊🍌🍉🍇🍓', '🍎');
 * // => ''
 */
const substringBefore = (subjectString, characters, last) => {
  if (typeof subjectString !== 'string' || typeof characters !== 'string') {
    throw new TypeError('Expected a string for first and second argument');
  }

  const index = !last ? subjectString.indexOf(characters) : subjectString.lastIndexOf(characters);

  return index !== -1 ? subjectString.substring(0, index) : '';
};

module.exports = substringBefore;
