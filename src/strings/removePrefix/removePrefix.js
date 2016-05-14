/**
 * Removes prefix from start of a string.
 * @param {String} subjectString The string to process.
 * @param {String} [prefix] Optional. The prefix substring to remove from the original string.
 * @returns {String} Returns the result string.
 */
function removePrefix(subjectString, prefix) {
    'use strict';

    if (typeof subjectString !== 'string' || typeof prefix !== 'string' && prefix != null) {
        throw new TypeError('Expected a string');
    }

    return subjectString.indexOf(prefix) === 0 ? subjectString.slice(prefix.length) : subjectString;
}
