/**
 * Removes whitespace from both ends of a string.
 * Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)
 * and all the line terminator characters (LF, CR, etc.).
 * @param {String} subjectString The string to trim.
 * @return {String} Returns the result string.
 */
function trim(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return String.prototype.trim ?
        subjectString.trim() :
        subjectString.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
