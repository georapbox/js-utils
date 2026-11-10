/**
 * Creates a new array containing up to `n` elements from the end
 * of the input array.
 *
 * @param {Array} array The array to process.
 * @param {number} [n=1] The number of elements to take. Fractional values are rounded down using `Math.floor()`.
 * @returns {Array} A new array containing the selected elements.
 * @throws {TypeError} If `array` is not an array or `n` is not a number.
 * @throws {RangeError} If `n` is `NaN`.
 * @returns {Array} Returns a new array containing the selected items.
 * @example
 *
 * takeRight([1, 2, 3, 4, 5]);
 * // => [5]
 *
 * takeRight([1, 2, 3, 4, 5], 3);
 * // => [3, 4, 5]
 *
 * takeRight([1, 2, 3, 4, 5], 2.7);
 * // => [4, 5]
 *
 * takeRight([1, 2, 3, 4, 5], 0);
 * // => []
 *
 * takeRight([1, 2, 3, 4, 5], -2);
 * // => []
 *
 * takeRight([1, 2, 3, 4, 5], 10);
 * // => [1, 2, 3, 4, 5]
 *
 * takeRight([1, 2, 3, 4, 5], Infinity);
 * // => [1, 2, 3, 4, 5]
 */
export function takeRight(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof n !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  if (Number.isNaN(n)) {
    throw new RangeError('Expected a valid number for second argument');
  }

  const count = Math.max(0, Math.floor(n));

  return array.slice(Math.max(0, array.length - count));
}
