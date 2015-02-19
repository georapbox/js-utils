/**
 * Removes all HTML tags from a string.
 * @param   {String} string The string to strip.
 * @returns {String} The stripped string.
 */
function stripHTML(string) {
    'use strict';
    return string.replace(/<[^>]+>/g, '');
}