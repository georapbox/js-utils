'use strict';

/**
 * Converts the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#34` and `&#39;` in a string to their corresponding characters.
 *
 * @param {String} subjectString The HTML string to unescape.
 * @throws {TypeError} If `subjectString` is not string.
 * @returns {String} The unescaped string.
 * @example
 *
 * unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');
 * // => '<script src="main.js"></script>'
 *
 * unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;');
 * // => 'Hello & <span>World</span>'
 *
 * unescapeHTML('&lt;p data-id&#x3D;&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;');
 * // => '<p data-id="1">lorem ipsum</p>'
 */
const unescapeHTML = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  const htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#34;': '"',
    '&#39;': "'" // eslint-disable-line quotes
  };

  const regexEscapedHtml = /&(?:amp|lt|gt|quot|#34|#39);/g;
  const regexHasEscapedHtml = RegExp(regexEscapedHtml.source);

  return regexHasEscapedHtml.test(subjectString)
    ? subjectString.replace(regexEscapedHtml, tag => htmlUnescapes[tag] || tag)
    : subjectString;
};

module.exports = unescapeHTML;
