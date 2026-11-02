/**
 * Checks if a value is `null`.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if the 'value' is null, else false.
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull(true);
 * // => false
 *
 * isNull({a: 'a'});
 * // => false
 *
 * isNull();
 * // => false
 */
export const isNull = (value) => {
  return value === null;
};
