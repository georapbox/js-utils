/**
 * Counts the words of a string.
 * @param {String} subjectString The string to process.
 * @return {Number} The number of words the string contains.
 */
function countWords(subjectString) {
    'use strict';

    var matches;

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    matches = subjectString.match(/\S+/g) ;

    return matches ? matches.length : 0;
}
