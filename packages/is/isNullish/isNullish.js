'use strict';

/**
 * Checks if a value is `null` or `undefined`.
 *
 * @param {*} value The value to check.
 * @return {Boolean} True if the value is `null` or `undefined`; otherwise false.
 * @example
 *
 * var foo;
 *
 * isNullish(foo);
 * // -> true
 *
 * isNullish(null);
 * // -> true
 *
 * isNullish({foo: 'bar'});
 * // -> false
 *
 * isNullish();
 * // -> true
 */
function isNullish(value) {
  return value == null;
}

module.exports = isNullish;
