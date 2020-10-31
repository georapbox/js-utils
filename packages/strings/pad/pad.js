'use strict';

/**
 * Pad `subjectString` on both sides to the given `len`, with optional `chars` defaulting to a space.
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
 * pad('Hello', 9);
 * // -> "  Hello  "
 *
 * pad('Hello', 9, '-');
 * // -> "--Hello--"
 *
 * pad('Hello', 6, '-');
 * // -> '-Hello'
 *
 * pad('Hello', 5, '-');
 * // -> 'Hello' (len is the same as str.length)
 */
function pad(subjectString, len, chars) {
  var left, right;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (typeof len !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  chars = chars || ' '; // Set default character.

  if (subjectString.length >= len) {
    return subjectString;
  }

  len = len - subjectString.length;
  left = [];
  right = [];
  left.length = Math.ceil(len / 2) + 1;
  right.length = Math.floor(len / 2) + 1;
  left = left.join(chars);
  right = right.join(chars);

  return left + subjectString + right;
}

module.exports = pad;