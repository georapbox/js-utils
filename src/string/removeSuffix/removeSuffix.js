/**
 * Removes a suffix from the end of a string if present.
 *
 * Returns the original string if it does not end with the specified suffix.
 * Only the last occurrence at the end is removed.
 *
 * @param {string} str The string to process.
 * @param {string} suffix The suffix to remove.
 * @returns {string} The string without the specified suffix, if present.
 * @throws {TypeError} If either argument is not a string.
 * @example
 *
 * removeSuffix('foobar__', '__');
 * // => 'foobar'
 *
 * removeSuffix('foobar__', '??');
 * // => 'foobar__'
 *
 * removeSuffix('foofoo', 'foo');
 * // => 'foo'
 *
 * removeSuffix('foobar', '');
 * // => 'foobar'
 */
export function removeSuffix(str, suffix) {
  if (typeof str !== 'string' || typeof suffix !== 'string') {
    throw new TypeError('Expected all arguments to be strings');
  }

  return str.endsWith(suffix) && suffix.length > 0 ? str.slice(0, -suffix.length) : str;
}
