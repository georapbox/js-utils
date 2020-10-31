'use strict';

/**
 * Escapes a HTML string.
 *
 * @category String
 * @param {String} subjectString The HTML string to escape.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} Returns the escaped string.
 * @example
 *
 * escapeHTML('<script src="main.js"><\/script>');
 * // -> '&lt;script src&#x3D;&quot;main.js&quot;&gt;&lt;&#x2F;script&gt;'
 *
 * escapeHTML('Hello & <span>World</span>');
 * // -> 'Hello &amp; &lt;span&gt;World&lt;&#x2F;span&gt;'
 *
 * escapeHTML('<p data-id="1">lorem ipsum</p>');
 * // -> '&lt;p data-id&#x3D;&quot;1&quot;&gt;lorem ipsum&lt;&#x2F;p&gt;'
 */
function escapeHTML(subjectString) {
  var entityMap;

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;', // eslint-disable-line quotes
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  return subjectString.replace(/[&<>"'`=/]/g, function fromEntityMap(tag) {
    return entityMap[tag] || tag;
  });
}

module.exports = escapeHTML;