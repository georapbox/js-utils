'use strict';

/**
 * Determines whether a string ends with the characters of another string.
 *
 * @param {String} subjectString The string to process.
 * @param {String} searchString The characters to be searched for at the end of the original string.
 * @param {Number} [position=subjectString.length] Search within this string as if this string were only this long;
 *        defaults to the original string's actual length, clamped within the range established by this string's length.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {Boolean} True if `subjectString` ends with `searchString`, else false.
 * @example
 *
 * var str = 'To be, or not to be, that is the question.';
 *
 * endsWith(str, 'question.');
 * // -> true
 *
 * endsWith(str, 'to be');
 * // -> false
 *
 * endsWith(str, 'to be', 19);
 * // -> true
 */
function endsWith(subjectString, searchString, position) {
  var lastIndex;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (String.prototype.endsWith) {
    return subjectString.endsWith(searchString, position);
  }

  if (searchString == null) {
    return false;
  }

  subjectString = subjectString.toString();
  searchString = searchString.toString();

  if (
    typeof position !== 'number' || !isFinite(position)
    || Math.floor(position) !== position || position > subjectString.length
  ) {
    position = subjectString.length;
  }

  position -= searchString.length;
  lastIndex = subjectString.indexOf(searchString, position);

  return lastIndex !== -1 && lastIndex === position;
}

module.exports = endsWith;