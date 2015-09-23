/**
 * Checks if 'value' is a boolean value.
 * @param   {*}       value The value to check.
 * @returns {Boolean} Returns true if the 'value' is a boolean value, else false.
 */
function isBoolean(value) {
    'use strict';

    return (value === true || value === false || value && typeof obj === 'object') &&
        (Object.prototype.toString.call(value) === '[object Boolean]') ||
        false;
}
