/**
 * Creates a slice of an array with `n` elements dropped from the beginning.
 *
 * @param {Array} array The array to process.
 * @param {number} [n=1] The number of elements to drop. Fractional values are rounded down using `Math.floor()`.
 * @throws {TypeError} If `array` is not an array or `n` is not a number.
 * @throws {RangeError} If `n` is `NaN`.
 * @returns {Array} Returns a new array containing the remaining elements.
 * @example
 *
 * drop([1, 2, 3, 4, 5]);
 * // => [2, 3, 4, 5]
 *
 * drop([1, 2, 3, 4, 5], 3);
 * // => [4, 5]
 *
 * drop([1, 2, 3, 4, 5], 2.7);
 * // => [3, 4, 5]
 *
 * drop([1, 2, 3, 4, 5], 0);
 * // => [1, 2, 3, 4, 5]
 *
 * drop([1, 2, 3, 4, 5], -2);
 * // => [1, 2, 3, 4, 5]
 *
 * drop([1, 2, 3, 4, 5], 10);
 * // => []
 *
 * drop([1, 2, 3, 4, 5], Infinity);
 * // => []
 */
export function drop(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof n !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  if (Number.isNaN(n)) {
    throw new RangeError('Expected a valid number for second argument');
  }

  return array.slice(Math.max(0, Math.floor(n)));
}
