/**
 * Removes whitespace from the left end of a string.
 * @param {String} str The string to left trim.
 */
function trimLeft(str) {
    'use strict';

    return str.replace(/^\s+/, '');
}
