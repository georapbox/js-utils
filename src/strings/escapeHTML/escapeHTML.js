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
 * // -> ''&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;''
 *
 * escapeHTML('Hello & <span>World</span>');
 * // -> 'Hello &amp; &lt;span&gt;World&lt;/span&gt;'
 *
 * escapeHTML('<p data-id="1">lorem ipsum</p>');
 * // -> '&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;'
 */
function escapeHTML(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.replace(/[&<>"]/g, function (tag) {
        var charsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;'
        };

        return charsToReplace[tag] || tag;
    });
}
