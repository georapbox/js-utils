/**
 * Returns a substring before a specific sequence of character(s).
 * By default looks for the first occuerence of this sequence.
 * If the character or sequence of characters not found, returns the initial string.
 *
 * @param {string} str The string to process.
 * @param {string} chars The seqquence of characters to use as delimiter.
 * @param {boolean} [last] If "true" or any truthy value, will look for the last occurence of the characters specified.
 * @returns {string} The final string.
 */
function subStrBeforeChars(str, chars, last) {
    'use strict';

    var args = [].slice.apply(arguments),
        argsLen = args.length,
        index = !last ? str.indexOf(chars) : str.lastIndexOf(chars);

    return argsLen < 2 ? str :
        !!~index && index !== 0 ? str.substr(0, index) : str;
}
