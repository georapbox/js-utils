/**
 * Escapes a HTML string.
 * @param {String} html The HTML string to escape.
 * @returns {String} The escaped string.
 */
function escapeHTML(html) {
    'use strict';

    return html.replace(/[&<>"]/g, function (tag) {
        var charsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;'
        };

        return charsToReplace[tag] || tag;
    });
}
