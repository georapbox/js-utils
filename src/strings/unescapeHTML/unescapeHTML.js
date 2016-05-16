/**
 * Unescapes a HTML string.
 *
 * @category String
 * @param {String} subjectString The HTML string to unescape.
 * @return {String} The unescaped string.
 * @example
 *
 * unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');
 * // -> '<script src="main.js"><\/script>'
 *
 * unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;');
 * // -> 'Hello & <span>World</span>'
 *
 * unescapeHTML('&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;');
 * // -> '<p data-id="1">lorem ipsum</p>'
 */
function unescapeHTML(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#034;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&amp;/g, '&');
}
