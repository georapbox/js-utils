/**
 * Removes all HTML tags from a string.
 * @param {String} subjectString The string to strip.
 * @return {String} Returns the stripped string.
 */
function stripHTML(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.replace(/<[^>]+>/g, '');
}
