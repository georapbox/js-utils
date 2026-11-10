// Reuse the segmenter across calls to avoid creating a new instance each time.
const segmenter = new Intl.Segmenter(undefined, {
  granularity: 'grapheme'
});

/**
 * Truncates a string to the specified number of characters.
 *
 * Uses Unicode grapheme clusters to avoid splitting characters such as
 * emojis, flags, and letters with combining marks.
 *
 * Appends `suffix` only when truncation occurs. The suffix is not
 * included in the character count. Whitespace is preserved.
 *
 * Fractional counts are rounded down. Negative, NaN, and infinite
 * counts return the original string.
 *
 * Treats the input as plain text. HTML markup is not parsed or preserved
 * and may be truncated in the middle of a tag.
 *
 * @param {string} str The string to truncate.
 * @param {number} count The maximum number of characters to retain.
 * @param {string} [suffix=""] The string to append when truncation occurs.
 * @returns {string} The truncated string, or the original if no truncation is needed.
 * @throws {TypeError} If `str` or `suffix` is not a string, or `count` is not a number.
 * @example
 *
 * truncate('Hello world', 5);
 * // => 'Hello'
 *
 * truncate('Hello world', 5, '...');
 * // => 'Hello...'
 *
 * truncate('Hello', 5, '...');
 * // => 'Hello'
 *
 * truncate('Hello world', 6, '...');
 * // => 'Hello ...'
 *
 * truncate('👩‍💻 Hello', 1, '...');
 * // => '👩‍💻...'
 *
 * truncate('🇬🇷 Greece', 1, '...');
 * // => '🇬🇷...'
 *
 * truncate('Hello', 0, '...');
 * // => '...'
 *
 * truncate('Hello', 3.7);
 * // => 'Hel'
 *
 * truncate('Hello', -1);
 * // => 'Hello'
 *
 * truncate('Hello', NaN);
 * // => 'Hello'
 *
 * truncate('Hello', Infinity);
 * // => 'Hello'
 *
 * truncate('Hello');
 * // Throws TypeError
 */
export function truncate(str, count, suffix = '') {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (typeof count !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  if (typeof suffix !== 'string') {
    throw new TypeError('Expected a string for third argument');
  }

  if (!Number.isFinite(count) || count < 0) {
    return str;
  }

  const characters = Array.from(segmenter.segment(str), ({ segment }) => segment);

  const limit = Math.floor(count);

  if (limit >= characters.length) {
    return str;
  }

  return characters.slice(0, limit).join('') + suffix;
}
