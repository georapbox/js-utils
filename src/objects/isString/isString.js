/**
 * Checks if 'value' is string.
 * @param {*} 'value' to check if is string.
 * @returns {boolean} Returns true if string, else false.
 */
function isString(value) {
    'use strict';
    return Object.prototype.toString.call(value) === '[object String]';
}
