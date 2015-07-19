/**
 * Counts the words of a string.
 * @param {string} str The string to process.
 * @return {number}  The number of words the string contains.
 */
function countWords(str) {
    'use strict';

    if (typeof str !== 'string') {
        throw new TypeError('A string was expected as argument, instead saw ' + typeof str);
    }

    var matches = str.match(/\S+/g) ;
    return matches ? matches.length : 0;
}
