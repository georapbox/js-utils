'use strict';

/**
 * Pad `subjectString` on left side to the given `len`, with optional `chars` defaulting to a space.
 *
 * @param {String} subjectString The string to process.
 * @param {Number} len The length to pad the string.
 * @param {String} [chars=' '] The character(s) to use for padding.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `len` is not number.
 * @return {String} The result padded string.
 * @example
 *
 * padLeft('Hello', 10);
 * // -> '     Hello'
 *
 * padLeft('Hello', 5, '-');
 * // -> '-----Hello'
 */
function padLeft(subjectString, len, chars) {
  var left;

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

  left = [];
  left.length = len - subjectString.length + 1;
  left = left.join(chars);

  return left + subjectString;
}

module.exports = padLeft;