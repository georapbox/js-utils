/**
 * Checks if 'value' is a boolean value.
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if the 'value' is a boolean value, else false.
 */
function isBoolean(value) {
    'use strict';
    return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
}
