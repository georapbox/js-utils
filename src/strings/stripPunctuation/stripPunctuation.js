/**
 * Removes all of the punctuation from a string.
 * @param {String} subjectString The string to strip the punctuation from.
 * @return {String} Returns the stripped string.
 */
function stripPunctuation(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
}
