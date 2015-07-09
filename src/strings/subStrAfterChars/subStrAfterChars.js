/**
 * Returns a substring after a specific sequence of character(s).
 * By default looks for the first occuerence of this sequence.
 * If the character or sequence of characters not found, returns the initial string.
 *
 * @param {string} str The string to process.
 * @param {string} chars The seqquence of characters to use as delimiter.
 * @param {boolean} [last] If "true" or any truthy value, will look for the last occurence of the characters specified.
 * @returns {string} The final string.
 */
function subStrAfterChars(str, chars, last) {
    'use strict';

    return str && chars ?
        !last ? (function () {
            return str.substr(str.indexOf(chars) + chars.length);
        }()) : (function () {
            var arr = str.split(chars),
                len = arr.length,
                result = arr[len - 1];

            arr = len = null;
            return result;
        }()) : new TypeError('subStrAfterChars expects at least two arguments.');
}
