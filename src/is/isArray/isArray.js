/**
 * Checks if a value is array.
 *
 * @param {*} value The value to check if is array.
 * @returns {Boolean} True if array, else false.
 * @example
 *
 * isArray(['a', 'b', 'c', 'd']);
 * // => true
 *
 * isArray(100);
 * // => false
 *
 * isArray('Lorem ipsum dolor sit amet');
 * // => false
 *
 * isArray({ a: 'a', b: 'b' });
 * // => false
 */
export const isArray = (value) => {
  return Array.isArray(value);
};
