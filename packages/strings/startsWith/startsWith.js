'use strict';

/**
 * Determines whether a string begins with the characters of another string.
 *
 * @param {String} subjectString The string to process.
 * @param {String} searchString The characters to be searched for at the start of the string.
 * @param {Number} [position=0] The position in the original string at which to begin searching for `prefix`.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {Boolean} Returns `true` if `subjectString` starts with `searchString`; otherwise `false`.
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
 *
 * startsWith('🍏 🍎 🍐 🍊 🍋', '🍏');
 * // -> true
 *
 * startsWith('🍏 🍎 🍐 🍊 🍋', '🍎');
 * // -> false
 */
function startsWith(subjectString, searchString, position) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (searchString == null) {
    return false;
  }

  if (String.prototype.startsWith) {
    return subjectString.startsWith(searchString, position);
  }

  var pos = position > 0 ? position | 0 : 0;

  return subjectString.substring(pos, pos + searchString.length) === searchString;
}

module.exports = startsWith;
