/**
 * Returns the index of the first element that passes the callback check.
 * If no element passes the callback check, returns -1.
 * @param {Array} array The array to check.
 * @param {Function} callback The function called per iteration.
 * @returns {Number} The index of the first element that matches the callback check.
 */
function findIndex(array, callback) {
    'use strict';

    var index, length;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('Expected a function');
    }

    index = -1;
    length = array.length;

    while (++index < length) {
        if (callback(array[index], index, array) === true) {
            return index;
        }
    }

    return -1;
}
