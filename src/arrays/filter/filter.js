/**
 * Creates a new array with all elements that pass the test implemented by the provided callback function.
 * @param {Array} array The array to iterate over.
 * @callback {Function} callback Function to test each element of the array.
 * @param {Object} [thisArg] Value to use as `this` when executing callback.
 * @returns {Array} The result array.
 */
function filter(array, callback, thisArg) {
    'use strict';

    var toString = Object.prototype.toString,
        isArray = toString.call(array) === '[object Array]',
        len, res;

    if (array == null || !isArray) {
        return [];
    }

    if (typeof callback !== 'function') {
        throw new TypeError('Expected a function');
    }

    len = array.length;
    res = array.slice();

    while (len--) {
        if (!callback.call(thisArg, array[len], len, array)) {
            res.splice(len, 1);
        }
    }

    return res;
}
