/**
 * Pad `subjectString` on right side to the given `len`, with optional `chars` defaulting to a space.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @param {Number} len The length to pad the string.
 * @param {String} [chars=' '] The character(s) to use for padding.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `len` is not number.
 * @return {String} The result padded string.
 * @example
 *
 * padRight('Hello', 10);
 * // -> 'Hello     '
 *
 * padRight('Hello', 5, '-');
 * // -> 'Hello-----'
 */
function padRight(subjectString, len, chars) {
  'use strict';

  var right;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (typeof len !== 'number') {
    throw new TypeError('Expected a number');
  }

  chars = chars || ' '; // Set default character.

  if (subjectString.length >= len) {
    return subjectString;
  }

  right = [];
  right.length = len - subjectString.length + 1;
  right = right.join(chars);

  return subjectString + right;
}
