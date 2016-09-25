/**
 * Checks if 'value' is undefined.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is undefined, else false.
 * @example
 *
 * var foo;
 *
 * isUndefined(foo);
 * // -> true
 *
 * isUndefined(null);
 * // -> false
 *
 * isUndefined({foo: 'bar'});
 * // -> false
 *
 * isUndefined();
 * // -> true
 */
function isUndefined(value) {
  'use strict';

  return typeof value === 'undefined';
}
