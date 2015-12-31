/**
 * Checks if 'value' matches a hexadecimal regular expression.
 * @param {*} value The value to check.
 * @return {Boolean} Returns true if 'value' is a hexadecimal, else false.
 */
function isHexadecimal(value) {
    'use strict';
    return /^[0-9a-fA-F]+$/.test(value);
}
