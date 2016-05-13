/**
 * Creates an array of elements split into groups the length of `size`.
 * If array can’t be split evenly, the final chunk will be the remaining elements.
 * @param {Array} array The array to process.
 * @param {Number} [size=0] The length of each chunk. If a float number, it is converted to integer using `parseInt`.
 * @return {Array} The new array containing chunks. If `size` is lower than 1, an empty array is returned.
 */
function chunk(array, size) {
    'use strict';

    var MAX_INTEGER, length, result, index, resIndex;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    MAX_INTEGER = Number.MAX_VALUE || 1.7976931348623157e+308;

    size = size === Infinity || size === -Infinity ?
        (size < 0 ? -1 : 1) * MAX_INTEGER :
        parseInt(size, 10) || 0;

    length = array ? array.length : 0;

    if (!length || size < 1) {
        return [];
    }

    index = 0;
    resIndex = 0;
    result = [Math.ceil(length / size)];

    while (index < length) {
        result[resIndex] = array.slice(index, index += size);
        resIndex += 1;
    }

    return result;
}
