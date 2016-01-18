/**
 * Returns an array with the lines of a a string.
 * @param {String} str The string to process.
 * @return {Array} An array containing the lines of the string.
 */
function lines(str) {
    'use strict';
    return str.replace(/\r\n/g, '\n').split('\n');
}
