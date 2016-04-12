/**
 * Checks if `value` is a plain object, i.e. is constructed by the built-in
 * Object constructor and inherits directly from `Object.prototype` or `null`.
 * @param {*} value The value to check.
 * @returns {Boolean} Returns true if "value" is an object created by the "Object" constructor, else false.
 */
function isPlainObject(value) {
    'use strict';

    var toString = {}.toString,
        proto;

    if (typeof value === 'object' && value !== null) {
        // Use ES5 Object.getPrototypeOf if supported
        if (typeof Object.getPrototypeOf === 'function') {
            proto = Object.getPrototypeOf(value);
            return proto === Object.prototype || value.constructor === Object || proto === null;
        }

        // Otherwise, use internal class
        // This should be reliable as if getPrototypeOf not supported, in pre-ES5
        return toString.call(value) === '[object Object]' && value.constructor === Object;
    }

    return false;
}
