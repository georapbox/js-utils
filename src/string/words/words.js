const MAX_SEGMENTERS = 10;
const segmenters = new Map();

function getSegmenter(locale) {
  let segmenter = segmenters.get(locale);

  if (segmenter) {
    // Move the existing entry to the end (most recently used).
    segmenters.delete(locale);
    segmenters.set(locale, segmenter);

    return segmenter;
  }

  segmenter = new Intl.Segmenter(locale, {
    granularity: 'word'
  });

  // Remove the least recently used entry when the cache is full.
  if (segmenters.size >= MAX_SEGMENTERS) {
    segmenters.delete(segmenters.keys().next().value);
  }

  segmenters.set(locale, segmenter);

  return segmenter;
}

/**
 * Extracts words from a string using locale-aware word segmentation.
 *
 * Uses the runtime's default locale if none is provided.
 * Excludes whitespace, punctuation, and other non-word segments.
 *
 * Segmenters are cached by locale using a least recently used (LRU)
 * cache with a maximum of 10 entries.
 *
 * @param {string} str The string to process.
 * @param {string} [locale] The locale used for word segmentation. Defaults to the runtime's locale.
 * @returns {Array} An array containing the words.
 * @throws {TypeError} If `str` is not a string or `locale` is not a string or undefined.
 * @throws {RangeError} If `locale` is not a valid locale identifier.
 * @example
 *
 * words('Hello, world!');
 * // => ['Hello', 'world']
 *
 * words("Don't stop!", 'en');
 * // => ["Don't", 'stop']
 *
 * words('Καλημέρα κόσμε', 'el');
 * // => ['Καλημέρα', 'κόσμε']
 *
 * words('こんにちは世界', 'ja');
 * // => ['こんにちは', '世界']
 *
 * words('Hello-world', 'en');
 * // => ['Hello', 'world']
 *
 * words('helloWorld', 'en');
 * // => ['helloWorld']
 *
 * words('');
 * // => []
 *
 * words('Hello', null);
 * // Throws TypeError
 *
 * words('Hello', 'invalid_locale');
 * // Throws RangeError
 */
export function words(str, locale) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  if (locale !== undefined && typeof locale !== 'string') {
    throw new TypeError('Expected a string for second argument');
  }

  const segmenter = getSegmenter(locale);
  const result = [];

  for (const { segment, isWordLike } of segmenter.segment(str)) {
    if (isWordLike) {
      result.push(segment);
    }
  }

  return result;
}
