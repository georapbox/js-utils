/**
 * Converts all adjacent whitespace characters to a single space.
 * @param {String} subjectString The string to process.
 * @return {String} The final string with all adjacent whitespace converted to single space.
 */
function collapseWhitespace(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
}
