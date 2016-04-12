/**
 * Checks if 'value' is a function.
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if 'value' is a function, else returns false.
 */
function isFunction(value) {
    'use strict';
    return typeof value === 'function' && Object.prototype.toString.call(value) === '[object Function]';
}
