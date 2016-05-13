/**
 * Retrieves the value of a specified property from all elements in an array.
 * @param {Array} array The array to iterate over.
 * @param {String} key The name of the property to pluck.
 * @returns {Array} Returns the result array.
 */
function pluck(array, key) {
    'use strict';

    var arr, index, len, arrItem;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    arr = [];
    index = -1;
    len = array.length;
    arrItem;

    while (++index < len) {
        arrItem = array[index];

        if (arrItem.hasOwnProperty(key)) {
            arr[arr.length] = arrItem[key];
        }
    }

    return arr;
}
