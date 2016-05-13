/**
 * Checks if 'value' is array.
 * @param {*} value The 'value' to check if is array.
 * @return {Boolean} true|false Returns true if array, else false.
 */
function isArray(value) {
    'use strict';

    return Array.isArray ? Array.isArray(value) :
        Object.prototype.toString.call(value) === '[object Array]';
}
