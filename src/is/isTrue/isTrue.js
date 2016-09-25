/**
 * Checks if 'value' is true (strict equality).
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if the 'value' is true, else false.
 * @example
 *
 * isTrue(true);
 * // -> true
 *
 * isTrue(false);
 * // -> false
 *
 * isTrue();
 * // -> false
 */
function isTrue(value) {
  'use strict';

  return value === true;
}
