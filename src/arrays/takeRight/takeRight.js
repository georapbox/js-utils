/**
 * Creates a slice of `array` with `n` items taken from the end.
 *
 * @category Array
 * @param {Array} array The array to process.
 * @param {Number} [n=1] The number of items to take.
 * @return {Array} The slice of the array.
 * @example
 *
 * takeRight([1, 2, 3, 4, 5]);
 * // -> [5]
 *
 * takeRight([1, 2, 3, 4, 5], null);
 * // -> [5]
 *
 * takeRight([1, 2, 3, 4, 5], NaN);
 * // -> [5]
 *
 * takeRight([1, 2, 3, 4, 5], 3);
 * // -> [3, 4, 5]
 *
 * takeRight([1, 2, 3, 4, 5], 0);
 * // -> []
 *
 * takeRight([1, 2, 3, 4, 5], -2);
 * // -> []
 *
 * takeRight([1, 2, 3, 4, 5], 10);
 * // -> [1, 2, 3, 4, 5]
 *
 * takeRight([1, 2, 3, 4, 5], Number.MAX_VALUE);
 * // -> [1, 2, 3, 4, 5]
 *
 * takeRight([1, 2, 3, 4, 5], '2');
 * // -> Throws TypeError
 *
 * takeRight({}, 2);
 * // -> Throws TypeError
 */
function takeRight(array, n) {
    'use strict';

    var length;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    if (typeof n !== 'number' && n != null) {
        throw new TypeError('Expected a number');
    }

    length = array.length;
    n = n == null || n !== n ? 1 : Math.floor(n);
    n = length - n;

    return array.slice(n < 0 ? 0 : n, length);
}
