/**
 * Checks if 'value' is a function.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if 'value' is a function, else returns false.
 * @example
 *
 * isFunction(function test() {
 *   return 'This is test function.';
 * });
 * // -> true
 *
 * isFunction('This is a test function.');
 * // -> false
 */
function isFunction(value) {
  'use strict';

  return typeof value === 'function' &&
    Object.prototype.toString.call(value) === '[object Function]';
}
