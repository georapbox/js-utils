/**
 * Checks if "value" is the language type of "Object".
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if "value" is an object, else false.
 */
function isObject(value) {
    'use strict';
    return !!value && typeof value === 'function' || typeof value === 'object';
}
