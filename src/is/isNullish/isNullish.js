/**
 * Checks if a value is `null` or `undefined`.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if the value is `null` or `undefined`; otherwise false.
 * @example
 *
 * let foo;
 *
 * isNullish(foo);
 * // => true
 *
 * isNullish(null);
 * // => true
 *
 * isNullish({foo: 'bar'});
 * // => false
 *
 * isNullish();
 * // => true
 */
export const isNullish = (value) => {
  return value == null;
};
