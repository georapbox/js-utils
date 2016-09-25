/**
 * Determines whether one string may be found within another string, returning true or false as appropriate.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @param {String} searchString A string to be searched for within the original string.
 * @param {Number} [position=0] The position in the original string at which to begin searching for searchString; defaults to 0.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {Boolean} True if searchString is found within subjectString, else false.
 * @example
 *
 * contains(str, 'To be');
 * // -> true
 *
 * contains(str, 'question');
 * // -> true
 *
 * contains(str, 'nonexistent');
 * // -> false
 *
 * contains(str, 'To be', 1);
 * // -> false
 *
 * contains(str, 'TO BE');
 * // -> false
 */
function contains(subjectString, searchString, position) {
  'use strict';

  var subjectLength,
    searchLength;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (String.prototype.includes) {
    return subjectString.includes(searchString, position);
  }

  if (searchString == null) {
    return false;
  }

  subjectString = subjectString.toString();
  searchString = searchString.toString();

  position = parseInt(position, 10) || 0;
  subjectLength = subjectString.length;
  searchLength = searchString.length;

  return position + searchLength <= subjectLength ?
    subjectString.indexOf(searchString, position) !== -1 :
    false;
}
