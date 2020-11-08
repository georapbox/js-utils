'use strict';

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @param {Array} array The array to process.
 * @param {Number} [n=1] The number of elements to drop.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `n` is not number but not if is `undefined`.
 * @return {Array} The slice of the array.
 * @example
 *
 * drop([1, 2, 3, 4, 5]);
 * // -> [2, 3, 4, 5]
 *
 * drop([1, 2, 3, 4, 5], null);
 * // -> [2, 3, 4, 5]
 *
 * drop([1, 2, 3, 4, 5], NaN);
 * // -> [2, 3, 4, 5]
 *
 * drop([1, 2, 3, 4, 5], 3);
 * // -> [4, 5]
 *
 * drop([1, 2, 3, 4, 5], 0);
 * // -> [1, 2, 3, 4, 5]
 *
 * drop([1, 2, 3, 4, 5], -2);
 * // -> [1, 2, 3, 4, 5]
 *
 * drop([1, 2, 3, 4, 5], 10);
 * // -> []
 *
 * drop([1, 2, 3, 4, 5], Number.MAX_VALUE);
 * // -> []
 *
 * drop([1, 2, 3, 4, 5], '2');
 * // -> Throws TypeError
 *
 * drop({}, 2);
 * // -> Throws TypeError
 */
function drop(array, n) {
  var MAX_SAFE_INTEGER, length;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof n !== 'number' && typeof n !== 'undefined') {
    throw new TypeError('Expected a number for second argument');
  }

  MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
  length = array.length;

  n = n > MAX_SAFE_INTEGER
    ? length
    : n == null || n !== n ? 1 : Math.floor(n);

  return array.slice(n < 0 ? 0 : n, length);
}

module.exports = drop;