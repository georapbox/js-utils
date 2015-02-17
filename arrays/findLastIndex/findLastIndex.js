/**
 * Returns the index of the first element of a collection that passes the callback check,
 * iterating the elements from right to left.
 * @param   {Array}    array    The array to check.
 * @param   {Function} callback The function called per iteration.
 * @returns {Number}   The index of the first element that matches the callabck check.
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