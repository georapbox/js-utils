/**
 * Uppercases the first character of a string without changing the rest.
 *
 * Uses Unicode default casing rules, without locale-specific capitalization.
 *
 * @param {string} str The string to process.
 * @returns {string} The resulting string.
 * @throws {TypeError} If `str` is not a string.
 * @example
 *
 * upperFirst('hello');
 * // => 'Hello'
 *
 * upperFirst('hElLo');
 * // => 'HElLo'
 *
 * upperFirst('hElLo'.toLowerCase());
 * // => 'Hello'
 *
 * upperFirst('καλημέρα');
 * // => 'Καλημέρα'
 *
 * upperFirst('');
 * // => ''
 */
export function upperFirst(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  // String iteration handles Unicode code points, unlike str[0].
  const [first = ''] = str;

  return first.toUpperCase() + str.slice(first.length);
}
