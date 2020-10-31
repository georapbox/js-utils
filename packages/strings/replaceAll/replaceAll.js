'use strict';

/**
 * Creates a new string with all occurrences of `subString` replaced with `replaceString`.
 *
 * @category String
 * @param {String} subjectString The initial string.
 * @param {String} subString The substring to replace.
 * @param {String} replaceString The substring to replace with.
 * @param {Boolean} [caseInsensitive=false] If true, the lookup is case insensitive.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `subString` is not string.
 * @throws {TypeError} If `replaceString` is not string.
 * @return {String} The result string.
 * @example
 *
 * var str = 'Lorem ispum 5 dolor sit amet.';
 *
 * replaceAll(str, ' ', '_'));
 * // -> 'Lorem_ispum_5_dolor_sit_amet.'
 *
 * replaceAll(str, '', '-'));
 * // -> 'L-o-r-e-m- -i-s-p-u-m- -5- -d-o-l-o-r- -s-i-t- -a-m-e-t-.'
 *
 * replaceAll(str, '5', '15'));
 * // -> 'Lorem ispum 15 dolor sit amet.'
 *
 * replaceAll(str, 'Lorem', '***'));
 * // -> '*** ispum 5 dolor sit amet.'
 *
 * replaceAll(str, 'LOREM', '_lorem_', true));
 * // -> '_lorem_ ispum 5 dolor sit amet.'
 */
function replaceAll(subjectString, subString, replaceString, caseInsensitive) {
  if (
    typeof subjectString !== 'string'
    || typeof subString !== 'string'
    || typeof replaceString !== 'string'
  ) {
    throw new TypeError('Expected a string for the first three arguments');
  }

  // Case insensitive lookup.
  if (caseInsensitive === true) {
    subString = subString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return subjectString.replace(new RegExp(subString, 'gi'), replaceString);
  }

  // Case sensitive lookup.
  return subjectString.split(subString).join(replaceString);
}

module.exports = replaceAll;