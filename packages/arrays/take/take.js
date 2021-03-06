'use strict';

/**
 * Creates a slice of `array` with `n` items taken from the beginning.
 *
 * @param {Array} array The array to process.
 * @param {Number} [n=1] The number of items to take.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `n` is not number but not if is `undefined`.
 * @return {Array} The slice of the array.
 * @example
 *
 * take([1, 2, 3, 4, 5]);
 * // -> [1]
 *
 * take([1, 2, 3, 4, 5], NaN);
 * // -> [1]
 *
 * take([1, 2, 3, 4, 5], 3);
 * // -> [1, 2, 3]
 *
 * take([1, 2, 3, 4, 5], 0);
 * // -> []
 *
 * take([1, 2, 3, 4, 5], -2);
 * // -> []
 *
 * take([1, 2, 3, 4, 5], 10);
 * // -> [1, 2, 3, 4, 5]
 *
 * take([1, 2, 3, 4, 5], Number.MAX_VALUE);
 * // -> [1, 2, 3, 4, 5]
 *
 * take([1, 2, 3, 4, 5], '2');
 * // -> Throws TypeError
 *
 * take({}, 2);
 * // -> Throws TypeError
 */
function take(array, n) {
  var MAX_SAFE_INTEGER;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof n !== 'number' && typeof n !== 'undefined') {
    throw new TypeError('Expected a number for second argument');
  }

  MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

  n = n > MAX_SAFE_INTEGER
    ? array.length
    : n == null || n !== n ? 1 : Math.floor(n);

  return array.slice(0, n < 0 ? 0 : n);
}

module.exports = take;