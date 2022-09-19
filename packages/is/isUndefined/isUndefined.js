'use strict';

/**
 * Checks if a value is `undefined`.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if the value is `undefined`, else false.
 * @example
 *
 * let foo;
 *
 * isUndefined(foo);
 * // => true
 *
 * isUndefined(null);
 * // => false
 *
 * isUndefined({foo: 'bar'});
 * // => false
 *
 * isUndefined();
 * // => true
 */
const isUndefined = value => typeof value === 'undefined';

module.exports = isUndefined;
