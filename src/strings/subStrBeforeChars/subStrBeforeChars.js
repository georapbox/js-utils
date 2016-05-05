/**
 * Returns a substring before a specific sequence of character(s).
 * By default looks for the first occuerence of this sequence.
 * If the character or sequence of characters not found, returns the initial string.
 * @param {String} subjectString The string to process.
 * @param {String} characters The seqquence of characters to use as delimiter.
 * @param {Boolean} [last] If "true" or any truthy value, will look for the last occurence of the characters specified.
 * @returns {string} The final string.
 */
function subStrBeforeChars(subjectString, characters, last) {
    'use strict';

    var args, index;

    if (typeof subjectString !== 'string' || typeof characters !== 'string') {
        throw new TypeError('Expected a string');
    }

    args = [].slice.apply(arguments);
    index = !last ? subjectString.indexOf(characters) : subjectString.lastIndexOf(characters);

    return !!~index && index !== 0 ? subjectString.substr(0, index) : subjectString;
}
