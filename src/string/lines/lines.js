/**
 * Splits a string into an array of lines.
 *
 * Recognizes LF (`\n`), CRLF (`\r\n`), CR (`\r`), Unicode line separator
 * (`\u2028`), and Unicode paragraph separator (`\u2029`).
 *
 * Empty lines are preserved, including those at the beginning or end
 * of the string. Line terminators are excluded from the result.
 *
 * @param {string} str The string to split into lines.
 * @returns {Array} An array containing the lines of the string.
 * @throws {TypeError} If `str` is not a string.
 * @example
 *
 * lines('Hello\nworld');
 * // => ['Hello', 'world']
 *
 * lines('Hello\r\nworld');
 * // => ['Hello', 'world']
 *
 * lines('Hello\rworld');
 * // => ['Hello', 'world']
 *
 * lines('Hello\u2028world\u2029again');
 * // => ['Hello', 'world', 'again']
 *
 * lines('Hello\n\nworld\n');
 * // => ['Hello', '', 'world', '']
 *
 * lines('');
 * // => ['']
 */
export function lines(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return str.split(/\r\n|[\n\r\u2028\u2029]/);
}
