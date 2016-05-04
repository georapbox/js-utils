/**
 * Counts the words of a string.
 * @param {String} str The string to process.
 * @return {Number} The number of words the string contains.
 */
function countWords(str) {
    'use strict';

    var matches;

    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }

    matches = str.match(/\S+/g) ;

    return matches ? matches.length : 0;
}
