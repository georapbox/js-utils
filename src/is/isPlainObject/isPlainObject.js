/**
 * Checks if `value` is a plain object (created using "{}" or "new Object").
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if "value" is a plain object, else false.
 */
function isPlainObject(value) {
    'use strict';

    var hasOwn = {}.hasOwnProperty;

    // Not plain objects:
    // - null or undefined
    // - Any object or value whose internal [[Class]] property is not "[object Object]"
    // - DOM nodes
    // - window
    if (value == null || typeof value !== 'object' || value.nodeType || value === value.window) {
        return false;
    }

    if (value.constructor && !hasOwn.call(value.constructor.prototype, 'isPrototypeOf')) {
        return false;
    }

    // If the function hasn't returned already, we're confident that
    // `value` is a plain object, created by {} or constructed with new Object.
    return true;
}
