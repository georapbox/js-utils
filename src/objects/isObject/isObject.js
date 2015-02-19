/**
 * Checks if "value" is the language type of "Object".
 * @param {*} value The value to check.
 * @returns {boolean} Returns true if "value" is an object, else false.
 */
function isObject(value) {
    'use strict';

    var type = typeof value;
    return !!value && (type === 'function' || type === 'object' || false);
}