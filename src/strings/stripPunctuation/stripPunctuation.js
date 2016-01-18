/**
 * Removes all of the punctuation from a string.
 * @param {String} str The string to strip the punctuation from.
 * @return {String} The stripped string.
 */
function stripPunctuation(str) {
    'use strict';
    return str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
}
