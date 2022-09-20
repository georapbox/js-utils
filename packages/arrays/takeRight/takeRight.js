'use strict';

/**
 * Creates a slice of `array` with `n` items taken from the end.
 *
 * @param {Array} array The array to process.
 * @param {Number} [n=1] The number of items to take.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `n` is not number but not if is `undefined`.
 * @returns {Array} The slice of the array.
 * @example
 *
 * takeRight([1, 2, 3, 4, 5]);
 * // => [5]
 *
 * takeRight([1, 2, 3, 4, 5], NaN);
 * // => [5]
 *
 * takeRight([1, 2, 3, 4, 5], 3);
 * // => [3, 4, 5]
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
 * takeRight([1, 2, 3, 4, 5], Number.MAX_VALUE);
 * // => [1, 2, 3, 4, 5]
 *
 * takeRight([1, 2, 3, 4, 5], '2');
 * // => Throws TypeError
 *
 * takeRight({}, 2);
 * // => Throws TypeError
 */
const takeRight = (array, n = 1) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof n !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
  const len = array.length;

  n = n > MAX_SAFE_INTEGER ? len : n == null || n !== n ? 1 : Math.floor(n);
  n = len - n;

  return array.slice(n < 0 ? 0 : n, len);
};

module.exports = takeRight;
