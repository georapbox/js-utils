/**
 * Creates a slice of `array` with `n` items taken from the beginning.
 *
 * @param {Array} array The array to process.
 * @param {number} [n=1] The number of items to take. Fractional values are rounded down using `Math.floor()`.
 * @throws {TypeError} If `array` is not an array or `n` is not a number.
 * @throws {RangeError} If `n` is `NaN`.
 * @returns {Array} Returns a new array containing the selected items.
 * @example
 *
 * take([1, 2, 3, 4, 5]);
 * // => [1]
 *
 * take([1, 2, 3, 4, 5], 3);
 * // => [1, 2, 3]
 *
 * take([1, 2, 3, 4, 5], 2.7);
 * // => [1, 2]
 *
 * take([1, 2, 3, 4, 5], 0);
 * // => []
 *
 * take([1, 2, 3, 4, 5], -2);
 * // => []
 *
 * take([1, 2, 3, 4, 5], 10);
 * // => [1, 2, 3, 4, 5]
 *
 * take([1, 2, 3, 4, 5], Infinity);
 * // => [1, 2, 3, 4, 5]
 */
export function take(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof n !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  if (Number.isNaN(n)) {
    throw new RangeError('Expected a valid number for second argument');
  }

  return array.slice(0, Math.max(0, Math.floor(n)));
}
