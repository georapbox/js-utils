/**
 * Generates a random string of n characters, using the "chars" specified.
 *
 * @category String
 * @param {number} n The length of the final random  string.
 * @param {string} [chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789']
 *        The characters to use in order to generate the string.
 * @return {string} Returns the random string.
 * @example
 *
 * randomString(10);
 * // -> 'RvXYUH6Swm'
 *
 * randomString(10, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
 * // -> 'SFUNKJHYDH'
 *
 * randomString(10, '0123456789');
 * // -> '2394127333'
 *
 * randomString();
 * // -> ''
 */
function randomString(n, chars) {
  'use strict';

  var result = '',
    index;

  // Default values, if arguments omitted.
  n = n || 0;
  chars = chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (index = n; index > 0; --index) {
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  }

  return result;
}
