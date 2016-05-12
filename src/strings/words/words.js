/**
 * Splits string into an array of its words.
 * @param {String} subjectString The string to process.
 * @return {Array} Returns the string's words.
 */
function words(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.match(/\S+/g) || [];
}
