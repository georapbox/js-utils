/**
 * Removes a prefix from the beginning of a string.
 * @param {string} str The string to be processed.
 * @param {string} [prefix] The prefix string to be removed from start of a string.
 * @return {string} Returns The chomped string or the initial string if prefix is not in the beginning of the string or is undefined or null.
 */
function chompLeft(str, prefix) {
    'use strict';

    // @NOTE: Use non strict equality to check for both undefined and null.
    if (typeof str !== 'string' || (typeof prefix !== 'string' && prefix != null)) {
        return new TypeError('chompLeft expects two strings as arguments, istead saw ' + typeof str + ' and ' + typeof prefix);
    }

    return str.indexOf(prefix) === 0 ? str.slice(prefix.length) : str;
}
