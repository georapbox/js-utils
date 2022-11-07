'use strict';

/**
 * Converts the characters "&", "<", ">", '"' and "'" in a string to their corresponding HTML entities.
 *
 * @param {String} subjectString The HTML string to escape.
 * @throws {TypeError} If `subjectString` is not string.
 * @returns {String} Returns the escaped string.
 * @example
 *
 * escapeHTML('<script src="main.js"></script>');
 * // => '&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;'
 *
 * escapeHTML('Hello & <span>World</span>');
 * // => 'Hello &amp; &lt;span&gt;World&lt;/span&gt;'
 *
 * escapeHTML('<p data-id="1">lorem ipsum</p>');
 * // => '&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;'
 */
const escapeHTML = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;' // eslint-disable-line quotes
  };

  const regexUnescapedHtml = /[&<>"'`]/g;
  const regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);

  return regexHasUnescapedHtml.test(subjectString)
    ? subjectString.replace(regexUnescapedHtml, tag => htmlEscapes[tag] || tag)
    : subjectString;
};

module.exports = escapeHTML;
