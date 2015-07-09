/**
 * Removes whitespace from the right end of a string.
 * @param {String} str The string to right trim.
 */
function trimRight(str) {
    'use strict';

    return str.replace(/\s+$/, '');
}
