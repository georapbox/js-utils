const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#34;': '"',
  '&#39;': "'"
};

/**
 * Converts supported HTML entities to their corresponding characters.
 *
 * Decodes ampersands (&amp;), angle brackets (&lt; &gt;),
 * double quotes (&quot; &#34;), and single quotes (&#39;).
 *
 * Only the listed entities are decoded. Other named or numeric HTML
 * entities remain unchanged. Decoding is performed in a single pass.
 *
 * Does not sanitize HTML. The resulting string may contain HTML markup.
 *
 * @param {string} str The string to unescape.
 * @returns {string} The unescaped string.
 * @throws {TypeError} If `str` is not a string.
 * @example
 *
 * unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');
 * // => '<script src="main.js"></script>'
 *
 * unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;');
 * // => 'Hello & <span>World</span>'
 *
 * unescapeHTML('&lt;p data-id=&quot;1&quot;&gt;Hello&lt;/p&gt;');
 * // => '<p data-id="1">Hello</p>'
 *
 * unescapeHTML('It&#39;s a beautiful day!');
 * // => "It's a beautiful day!"
 *
 * unescapeHTML('Tom &amp;amp; Jerry');
 * // => 'Tom &amp; Jerry'
 *
 * unescapeHTML('Hello world');
 * // => 'Hello world'
 *
 * unescapeHTML('');
 * // => ''
 */
export function unescapeHTML(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return str.replace(/&(?:amp|lt|gt|quot|#34|#39);/g, (entity) => htmlUnescapes[entity]);
}
