/**
 * Creates a new array with all elements that pass the test implemented by the provided callback function.
 * @param {array} arr The array to iterate over.
 * @callback {function} callback Function to test each element of the array.
 * @param {object} [thisArg] Value to use as "this" when executing callback.
 * @returns {array} The result array.
 */
function filter(arr, callback, thisArg) {
    'use strict';

    if (arr == null) { // jshint ignore:line
        return [];
    }

    if (typeof callback !== 'function') {
        throw new TypeError('filter expects a callback function.');
    }

    var len = arr.length,
        res = arr.slice();

    while (len--) {
        if (!callback.call(thisArg, arr[len], len, arr)) {
            res.splice(len, 1);
        }
    }

    return res;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = filter;
}
