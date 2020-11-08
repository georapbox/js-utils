'use strict';

/**
 * Splits string into an array of its words.
 *
 * @param {String} subjectString The string to process.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {Array} The string's words.
 * @example
 *
 * words('Hello world!        \n This is a message     from outer\tspace.');
 * // -> ['Hello', 'world!', 'This', 'is', 'a', 'message', 'from', 'outer', 'space.']
 *
 * words('');
 * // -> []
 *
 * words();
 * // -> Throws TypeError.
 *
 * words(100);
 * // -> Throws TypeError.
 */
function words(subjectString) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return subjectString.match(/\S+/g) || [];
}

module.exports = words;