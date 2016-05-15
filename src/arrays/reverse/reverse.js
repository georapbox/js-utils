/**
 * Reverses an array (not in place).
 * The first array element becomes the last and the last becomes the first.
 *
 * @category Array
 * @param {Array} array The array to reverse.
 * @return {Array} Returns a new array reversed.
 * @example
 *
 * reverse([1, 2, 3]);
 * // -> [3, 2, 1]
 */
function reverse(array) {
    'use strict';

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    return array.slice(0).reverse();
}
