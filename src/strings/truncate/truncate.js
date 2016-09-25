/**
 * Truncates a string based on character count.
 *
 * @category String
 * @param {String} subjectString The string to truncate.
 * @param {Number} [characterCount] The number of characters the truncated string contains.
 *        If ommitted or falsy, the initial string is returned.
 * @param {String} [delimiter=""] The delimiter to add at the end of the truncated string.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `characterCount` is not number.
 * @return {String} The truncated string.
 * @example
 *
 * var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptas tempora nihil commodi laborum sit eum atque iusto temporibus, odit natus odio accusantium id, labore, possimus laboriosam. Eos, ducimus, blanditiis.';
 *
 * truncate(str, 50, '...');
 * // -> 'Lorem ipsum dolor sit amet, consectetur adipisicin...'
 *
 * truncate(str, 30, '---');
 * // -> 'Lorem ipsum dolor sit amet, co---'
 *
 * truncate(str, 30);
 * // -> 'Lorem ipsum dolor sit amet, co'
 *
 * truncate(str, 0);
 * // -> ''
 *
 * truncate(str, 0, '...');
 * // -> '...'
 *
 * truncate(str, 3.7);
 * // -> 'Lor'
 *
 * truncate(str, -1);
 * // -> Returns the original string
 *
 * truncate(str, NaN);
 * // -> Returns the original string
 *
 * truncate({item: str}, 10);
 * // Throws TypeError
 *
 * truncate(str, '10');
 * // Throws TypeError
 */
function truncate(subjectString, characterCount, delimiter) {
  'use strict';

  var regex, truncated;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (typeof characterCount !== 'number') {
    throw new TypeError('Expected a number');
  }

  characterCount = Math.floor(characterCount);

  if (characterCount > subjectString.length ||
      characterCount < 0 || characterCount !== characterCount) {
    return subjectString;
  }

  regex = new RegExp('^.{0,' + characterCount + '}[\S]*', 'g');
  truncated = subjectString.match(regex);
  delimiter = delimiter || '';
  truncated = truncated[0].replace(/\s$/, '');
  truncated = truncated + delimiter;

  return truncated;
}
