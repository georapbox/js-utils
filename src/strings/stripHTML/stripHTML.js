/**
 * Removes all HTML tags from a string.
 * @param   {String} string The string to strip.
 * @returns {String} The stripped string.
 */
function stripHTML(string) {
    'use strict';
    return string.replace(/<[^>]+>/g, '');
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = stripHTML;
}
