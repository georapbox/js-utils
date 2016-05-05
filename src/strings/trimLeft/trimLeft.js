/**
 * Removes whitespace from the left end of a string.
 * @param {String} subjectString The string to left trim.
 * @return {String} Returns the result string.
 */
function trimLeft(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.replace(/^\s+/, '');
}
