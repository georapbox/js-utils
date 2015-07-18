/**
 * Unescapes a HTML string.
 * @param   {String} str The HTML string to unescape.
 * @returns {String} The unescaped string.
 */
function unescapeHTML(str) {
    'use strict';

    return str.
        replace(/&lt;/g, '<').
        replace(/&gt;/g, '>').
        replace(/&quot;/g, '"').
        replace(/&#034;/g, '"').
        replace(/&#039;/g, "'"). // jshint ignore: line
        replace(/&amp;/g, '&');
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = unescapeHTML;
}
