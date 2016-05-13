/**
 * Reverses an array (not in place).
 * The first array element becomes the last and the last becomes the first.
 * @param {Array} array The array to reverse.
 * @return {Array} A new array reversed.
 */
function reverse(array) {
    'use strict';

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    return array.slice(0).reverse();
}
