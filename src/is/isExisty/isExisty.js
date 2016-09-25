/**
 * Checks if 'value' is existy (Not null or undefined).
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is existy, else false.
 * @example
 *
 * isExisty('Foo');
 * // -> true
 *
 * isExisty(null);
 * // -> false
 *
 * isExisty();
 * // -> false
 */
function isExisty(value) {
  'use strict';

  return value != null;
}
