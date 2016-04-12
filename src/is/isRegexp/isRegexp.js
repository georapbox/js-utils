/**
 * Checks if 'value' is a regular expression.
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if the 'value' is a regular expression, else false.
 */
function isRegexp(value) {
    'use strict';
    return Object.prototype.toString.call(value) === '[object RegExp]';
}
