/**
 * Returns an array with only the unique values from the first array,
 * by excluding all values from the second array using strict equality for comparisons.
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