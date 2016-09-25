/**
 * Creates a slice of `array` with `n` items taken from the beginning.
 *
 * @category Array
 * @param {Array} array The array to process.
 * @param {Number} [n=1] The number of items to take.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `n` is not number but not if is `null` or `undefined`.
 * @return {Array} The slice of the array.
 * @example
 *
 * take([1, 2, 3, 4, 5]);
 * // -> [1]
 *
 * take([1, 2, 3, 4, 5], null);
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
  'use strict';

  var MAX_SAFE_INTEGER;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    throw new TypeError('Expected an array');
  }

  if (typeof n !== 'number' && n != null) {
    throw new TypeError('Expected a number');
  }

  MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

  n = n > MAX_SAFE_INTEGER ? array.length :
    n == null || n !== n ? 1 : Math.floor(n);

  return array.slice(0, n < 0 ? 0 : n);
}
