/**
 * Creates an array excluding all values of the provided arrays.
 * @param {Array} arrA The array to process.
 * @param {Array} arrB The values to exclude from "arrA".
 * @returns {Array} Array of values not included in the exclusion set.
 */
function diff(arrA, arrB) {
    var len = arrA.length,
        arr = [];

    if (!arrB) {
        return arrA;
    }

    while (len--) {
        if (arrB.indexOf(arrA[len]) === -1) {
            arr.unshift(arrA[len]);
        }
    }

    return arr;
}