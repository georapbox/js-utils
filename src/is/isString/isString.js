/**
 * Checks if 'value' is string.
 * @param {*} 'value' to check if is string.
 * @return {Boolean} true|false Returns true if string, else false.
 */
function isString(value) {
    'use strict';
    return !!value && Object.prototype.toString.call(value) === '[object String]';
}
