/**
 * Escapes a HTML string.
 * @param {String} html The HTML string to escape.
 * @returns {String} Returns the escaped string.
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
