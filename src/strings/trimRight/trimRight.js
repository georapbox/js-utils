/**
 * Removes whitespace from the right end of a string.
 * @param {String} subjectString The string to right trim.
 * @return {String} Returns the result string.
 */
function trimRight(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.replace(/\s+$/, '');
}
