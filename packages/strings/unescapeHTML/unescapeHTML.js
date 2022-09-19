'use strict';

/**
 * Unescapes a HTML string.
 *
 * @param {String} subjectString The HTML string to unescape.
 * @throws {TypeError} If `subjectString` is not string.
 * @returns {String} The unescaped string.
 * @example
 *
 * unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');
 * // => '<script src="main.js"><\/script>'
 *
 * unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;');
 * // => 'Hello & <span>World</span>'
 *
 * unescapeHTML('&lt;p data-id&#x3D;&quot;1&quot;&gt;lorem ipsum&lt;&#x2F;p&gt;');
 * // => '<p data-id="1">lorem ipsum</p>'
 */
const unescapeHTML = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return subjectString
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x3D;/g, '=')
    .replace(/&quot;/g, '"')
    .replace(/&#034;/g, '"')
    .replace(/&#039;/g, "'") // eslint-disable-line quotes
    .replace(/&#x60;/g, '`')
    .replace(/&#x2F;/g, '/');
};

module.exports = unescapeHTML;
