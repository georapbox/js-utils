/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @category Array
 * @param {Array} array The array to process.
 * @param {Number} [n=1] The number of elements to drop.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `n` is not number but not if is `null` or `undefined`.
 * @return {Array} The slice of the array.
 * @example
 *
 * dropRight([1, 2, 3, 4, 5]);
 * // -> [1, 2, 3, 4]
 *
 * dropRight([1, 2, 3, 4, 5], null);
 * // -> [1, 2, 3, 4]
 *
 * dropRight([1, 2, 3, 4, 5], NaN);
 * // -> [1, 2, 3, 4]
 *
 * dropRight([1, 2, 3, 4, 5], 3);
 * // -> [1, 2]
 *
 * dropRight([1, 2, 3, 4, 5], 0);
 * // -> [1, 2, 3, 4, 5]
 *
 * dropRight([1, 2, 3, 4, 5], -2);
 * // -> [1, 2, 3, 4, 5]
 *
 * dropRight([1, 2, 3, 4, 5], 10);
 * // -> []
 *
 * dropRight([1, 2, 3, 4, 5], Number.MAX_VALUE);
 * // -> []
 *
 * dropRight([1, 2, 3, 4, 5], '2');
 * // -> Throws TypeError
 *
 * dropRight({}, 2);
 * // -> Throws TypeError
 */
function dropRight(array, n) {
    'use strict';

    var MAX_SAFE_INTEGER, length;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    if (typeof n !== 'number' && n != null) {
        throw new TypeError('Expected a number');
    }

    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
    length = array.length;
    n = n > MAX_SAFE_INTEGER ? length : n == null || n !== n ? 1 : Math.floor(n);
    n = length - n;

    return array.slice(0, n < 0 ? 0 : n);
}
