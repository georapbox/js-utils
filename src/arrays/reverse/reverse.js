/**
 * Reverses an array (not in place).
 * The first array element becomes the last and the last becomes the first.
 * @param {Array} array The array to reverse.
 * @return {Array} A new array reversed.
 */
function reverse(array) {
    'use strict';
    return array.slice(0).reverse();
}
