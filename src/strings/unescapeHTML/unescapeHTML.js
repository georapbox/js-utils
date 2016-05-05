/**
 * Unescapes a HTML string.
 * @param {String} subjectString The HTML string to unescape.
 * @return {String} The unescaped string.
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
