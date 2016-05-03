/**
 * Executes a provided callback function once per array element.
 * @param {Array} array The array to iterate over.
 * @callback {Function} callback Function to execute for each element.
 * @param {Object} [thisArg] Value to use as `this` when executing callback.
 */
function forEach(array, callback, thisArg) {
    'use strict';

    var toString = Object.prototype.toString,
        isArray = toString.call(array) === '[object Array]',
        i, len;

    if (array == null || !isArray) {
        throw new TypeError('Expected an array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('Expected a function');
    }

    i = 0;
    len = array.length;

    for (i; i < len; i++) {
        if (callback.call(thisArg, array[i], i, array) === false) {
            return;
        }
    }
}
