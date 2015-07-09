/**
 * Returns a new string with all occurrences of [string1], [string2],... removed.
 * @param {String} str The initial string.
 * @returns {String} the final string.
 */
function strip(str) {
    'use strict';

    var i = 1,
        len = arguments.length;

    for (i; i < len; i += 1) {
        str = str.split(arguments[i]).join('');
    }

    return str;
}
