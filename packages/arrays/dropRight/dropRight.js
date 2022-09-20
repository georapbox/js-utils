'use strict';

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @param {Array} array The array to process.
 * @param {Number} [n=1] The number of elements to drop.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `n` is not number but not if is `undefined`.
 * @returns {Array} The slice of the array.
 * @example
 *
 * dropRight([1, 2, 3, 4, 5]);
 * // => [1, 2, 3, 4]
 *
 * dropRight([1, 2, 3, 4, 5], null);
 * // => [1, 2, 3, 4]
 *
 * dropRight([1, 2, 3, 4, 5], NaN);
 * // => [1, 2, 3, 4]
 *
 * dropRight([1, 2, 3, 4, 5], 3);
 * // => [1, 2]
 *
 * dropRight([1, 2, 3, 4, 5], 0);
 * // => [1, 2, 3, 4, 5]
 *
 * dropRight([1, 2, 3, 4, 5], -2);
 * // => [1, 2, 3, 4, 5]
 *
 * dropRight([1, 2, 3, 4, 5], 10);
 * // => []
 *
 * dropRight([1, 2, 3, 4, 5], Number.MAX_VALUE);
 * // => []
 *
 * dropRight([1, 2, 3, 4, 5], '2');
 * // => Throws TypeError
 *
 * dropRight({}, 2);
 * // => Throws TypeError
 */
const dropRight = (array, n) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof n !== 'number' && typeof n !== 'undefined') {
    throw new TypeError('Expected a number for second argument');
  }

  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
  const len = array.length;

  n = n > MAX_SAFE_INTEGER ? len : n == null || n !== n ? 1 : Math.floor(n);
  n = len - n;

  return array.slice(0, n < 0 ? 0 : n);
};

module.exports = dropRight;
