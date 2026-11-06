/**
 * Removes a prefix from the beginning of a string if present.
 *
 * Returns the original string if it does not start with the specified prefix.
 * Only the first occurrence at the beginning is removed.
 *
 * @param {string} str The string to process.
 * @param {string} prefix The prefix to remove.
 * @returns {string} The string without the specified prefix, if present.
 * @throws {TypeError} If either argument is not a string.
 * @example
 *
 * removePrefix('__foo', '__');
 * // => 'foo'
 *
 * removePrefix('__foobar', '??');
 * // => '__foobar'
 *
 * removePrefix('foofoo', 'foo');
 * // => 'foo'
 *
 * removePrefix('foobar', '');
 * // => 'foobar'
 */
export function removePrefix(str, prefix) {
  if (typeof str !== 'string' || typeof prefix !== 'string') {
    throw new TypeError('Expected all arguments to be strings');
  }

  return str.startsWith(prefix) ? str.slice(prefix.length) : str;
}
