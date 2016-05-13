/**
 * Executes a provided callback function once per array element.
 * @param {Array} array The array to iterate over.
 * @callback {Function} callback Function to execute for each element.
 * @param {Object} [thisArg] Value to use as `this` when executing callback.
 */
function forEach(array, callback, thisArg) {
    'use strict';

    var index, len;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('Expected a function');
    }

    index = 0;
    len = array.length;

    for (; index < len; index += 1) {
        if (callback.call(thisArg, array[index], index, array) === false) {
            return;
        }
    }
}
