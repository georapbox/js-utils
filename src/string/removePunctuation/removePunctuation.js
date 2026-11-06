/**
 * Removes Unicode punctuation characters from a string.
 *
 * Removes punctuation such as periods, commas, quotes, apostrophes,
 * brackets, dashes, underscores, and punctuation from other languages.
 * Letters, numbers, symbols, emojis, and whitespace are preserved.
 *
 * Punctuation is removed rather than replaced with spaces, so words
 * separated only by punctuation are joined together.
 *
 * @param {string} str The string to process.
 * @returns {string} The string without punctuation.
 * @throws {TypeError} If `str` is not a string.
 * @example
 *
 * removePunctuation('Hello, world!');
 * // => 'Hello world'
 *
 * removePunctuation("Don't stop!");
 * // => 'Dont stop'
 *
 * removePunctuation('hello-world_123');
 * // => 'helloworld123'
 *
 * removePunctuation('Hello—world！');
 * // => 'Helloworld'
 *
 * removePunctuation('Price: $50 + tax!');
 * // => 'Price $50 + tax'
 *
 * removePunctuation('Hello   world');
 * // => 'Hello   world'
 *
 * removePunctuation('');
 * // => ''
 */
export function removePunctuation(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return str.replace(/\p{P}/gu, '');
}
