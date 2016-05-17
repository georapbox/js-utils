/**
 * Checks if `value` is a plain object (created using "{}" or "new Object").
 *
 * @category Is
 * @NOTE Use with caution as host objects (or objects used by browser host environments to complete the execution environment of ECMAScript) have a number of inconsistencies which are difficult to robustly feature detect cross-platform.
 * @param {*} value The value to check.
 * @return {Boolean} True if "value" is a plain object, else false.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * isPlainObject({});
 * // -> true
 *
 * isPlainObject({foo: 'bar'});
 * // -> true
 *
 * isPlainObject(new Object({foo: 'bar'}));
 * // -> true
 *
 * isPlainObject(new Foo());
 * // -> false
 *
 * isPlainObject(Object.create(null));
 * // -> true
 *
 * isPlainObject(Object.create({}));
 * // -> true
 *
 * isPlainObject(Object.create({foo: 'bar'}));
 * // -> true
 *
 * isPlainObject([1, 2, 3]);
 * // -> false
 *
 * isPlainObject(null);
 * // -> false
 *
 * isPlainObject();
 * // -> false
 *
 * isPlainObject(100);
 * // -> false
 *
 * isPlainObject('lorem ipsum');
 * // -> false
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
