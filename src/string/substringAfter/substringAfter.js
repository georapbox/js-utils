/**
 * Returns the substring after the first occurrence of a delimiter.
 *
 * When `last` is truthy, uses the last occurrence instead.
 * Returns the original string if the delimiter is empty or not found.
 * Matching is case-sensitive.
 *
 * @param {string} str The string to process.
 * @param {string} delimiter The substring to search for.
 * @param {boolean} [last=false] Whether to use the last occurrence.
 * @returns {string} The substring after the delimiter, or the original string if the delimiter is empty or not found.
 * @throws {TypeError} If `str` or `delimiter` is not a string.
 * @example
 *
 * substringAfter('foo/bar/baz', '/');
 * // => 'bar/baz'
 *
 * substringAfter('foo/bar/baz', '/', true);
 * // => 'baz'
 *
 * substringAfter('foo/bar/baz', '?');
 * // => 'foo/bar/baz'
 *
 * substringAfter('foobar', '');
 * // => 'foobar'
 *
 * substringAfter('hello-world', 'hello-');
 * // => 'world'
 *
 * substringAfter('🍎🍐🍊🍌', '🍊');
 * // => '🍌'
 */
export function substringAfter(str, delimiter, last = false) {
  if (typeof str !== 'string' || typeof delimiter !== 'string') {
    throw new TypeError('Expected a string for first and second argument');
  }

  if (delimiter === '') {
    return str;
  }

  const index = last ? str.lastIndexOf(delimiter) : str.indexOf(delimiter);

  return index !== -1 ? str.slice(index + delimiter.length) : str;
}
