const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Escapes special HTML characters in a string.
 *
 * Converts ampersands (&), angle brackets (< >), double quotes ("),
 * and single quotes (') to their corresponding HTML entities.
 *
 * Escapes the entire input, including characters inside attribute values.
 * When constructing HTML, escape dynamic text or quoted attribute values,
 * not the HTML markup itself.
 *
 * Does not sanitize HTML or make strings safe for every HTML context,
 * such as JavaScript, CSS, or unquoted attribute values.
 *
 * @param {string} str The string to escape.
 * @returns {string} The escaped string.
 * @throws {TypeError} If `str` is not a string.
 * @example
 *
 * escapeHTML('<script src="main.js"></script>');
 * // => '&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;'
 *
 * escapeHTML('Hello & <span>World</span>');
 * // => 'Hello &amp; &lt;span&gt;World&lt;/span&gt;'
 *
 * escapeHTML("It's a beautiful day!");
 * // => 'It&#39;s a beautiful day!'
 *
 * escapeHTML('<p data-id="1">Hello</p>');
 * // => '&lt;p data-id=&quot;1&quot;&gt;Hello&lt;/p&gt;'
 *
 * escapeHTML('Hello world');
 * // => 'Hello world'
 *
 * escapeHTML('');
 * // => ''
 */
export function escapeHTML(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return str.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}
