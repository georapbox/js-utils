/**
 * Returns the index of the last element of a collection that passes the callback check.
 * @param {Array} array The array to check.
 * @param {Function} callback The function called per iteration.
 * @returns {Number} The index of the last element that matches the callback check.
 */
function findLastIndex(array, callback) {
    'use strict';

    var length;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('Expected a function');
    }

    length = array.length;

    while (length--) {
        if (callback(array[length], length, array)) {
            return length;
        }
    }

    return -1;
}
