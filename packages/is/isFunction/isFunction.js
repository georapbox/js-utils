'use strict';

/**
 * Checks if a value is a function.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value is a function, else returns false.
 * @example
 *
 * isFunction(function test() {
 *   return 'This is test function.';
 * });
 * // => true
 *
 * isFunction('This is a test function.');
 * // => false
 */
const isFunction = value => typeof value === 'function';

module.exports = isFunction;
