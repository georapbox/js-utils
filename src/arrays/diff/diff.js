/**
 * Returns an array with only the unique values from the first array,
 * by excluding all values from the second array using strict equality for comparisons.
 * @param {Array} arrayA The array to process.
 * @param {Array} arrayB The values to exclude from `arrayA`.
 * @returns {Array} Array of values not included in the exclusion set.
 */
function diff(arrayA, arrayB) {
    'use strict';

    var toString = Object.prototype.toString,
        len, arr;

    if (
        toString.call(arrayA) !== '[object Array]' ||
        arrayB != null && toString.call(arrayB) !== '[object Array]'
    ) {
        throw new TypeError('Expected an array');
    }

    len = arrayA.length;
    arr = [];

    if (!arrayB) {
        return arrayA;
    }

    while (len--) {
        if (arrayB.indexOf(arrayA[len]) === -1) {
            arr.unshift(arrayA[len]);
        }
    }

    return arr;
}
