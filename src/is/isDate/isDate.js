/**
 * Checks if 'value' is a date.
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if 'value' is a date, else returns false.
 */
function isDate(value) {
    'use strict';
    return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
