/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is `null` or `undefined`; otherwise false.
 * @example
 *
 * var foo;
 *
 * isNullOrUndefined(foo);
 * // -> true
 *
 * isNullOrUndefined(null);
 * // -> true
 *
 * isNullOrUndefined({foo: 'bar'});
 * // -> false
 *
 * isNullOrUndefined();
 * // -> true
 */
function isNullOrUndefined(value) {
  'use strict';

  return value == null;
}
