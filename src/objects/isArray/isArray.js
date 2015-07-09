/**
 * Checks if 'value' is array.
 * @param   {*}  value The 'value' to check if is array.
 * @returns {Boolean} Returns true if array, else false.
 */
function isArray(value) {
    'use strict';

    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        Object.prototype.toString.call(value) === '[object Array]' ||
        false;
}
