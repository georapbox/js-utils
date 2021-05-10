'use strict';

/**
 * Capitalizes the first character of a string.
 *
 * @param {String} subjectString The string to capitalize its first character.
 * @param {Boolean} [lowerCaseRest=false] If true will lowercase the rest of the string.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} A new capitalized string.
 * @example
 *
 * capitalize('hello');
 * // -> 'Hello'
 *
 * capitalize('hElLo');
 * // -< 'HElLo'
 *
 * capitalize('hElLo', true);
 * // -> 'Hello'
 */
function capitalize(subjectString, lowerCaseRest) {
  var firstChar, restStr;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  firstChar = subjectString.substring(0, 1).toUpperCase();

  restStr = lowerCaseRest === true
    ? subjectString.substring(1).toLocaleLowerCase()
    : subjectString.substring(1);

  return firstChar + restStr;
}

module.exports = capitalize;
