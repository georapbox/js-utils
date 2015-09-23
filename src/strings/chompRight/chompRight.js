/**
 * Removes a suffix from the end of a string.
 * @param {string} str The string to be processed.
 * @param {string} [suffix] The suffix string to be removed from end of a string.
 * @return {string} Returns The chomped string or the initial string if suffix is not at the end of the string or is undefined or null.
 */
function chompRight(str, suffix) {
    'use strict';

    var suffix_exists = suffix == null, // @NOTE: Use non strict equality to check for both undefined and null.
        is_string = function (value) {
            return typeof value === 'string';
        };

    if (!is_string(str) || (!is_string(suffix) && !suffix_exists)) {
        throw new TypeError('Two strings were expected as arguments, instead saw ' + typeof str + ' and ' + typeof suffix);
    }

    return !suffix_exists &&
        str.indexOf(suffix, str.length - suffix.length) !== -1 ?
        str.slice(0, str.length - suffix.length) :
        str;
}
