/**
 * https://lodash.com/docs#compact
 * Creates an array with all falsy values removed.
 * 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsey.
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 *
 * @example
 * compact([0, 1, false, 2, '', 3, null]);
 * // => [1, 2, 3]
 */
function compact(array) {
    'use strict';

    var index, length, resIndex, result;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    index = -1;
    length = array.length;
    resIndex = -1;
    result = [];

    while (++index < length) {
        var value = array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
