/**
 * Returns the index of the last element of a collection that passes the callback check.
 * @param {Array} array The array to check.
 * @param {Function} callback The function called per iteration.
 * @returns {Number} The index of the last element that matches the callback check.
 */
function findLastIndex(array, callback) {
    'use strict';

    var length = array ? array.length : 0;

    while (length--) {
        if (callback(array[length], length, array)) {
            return length;
        }
    }

    return -1;
}
