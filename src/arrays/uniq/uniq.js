
/**
 * Removes duplicate primitive values from an array.
 * Returns a new duplicates-free array.
 * @param {Array} arr The array to iterate over.
 * @returns {Array} The final duplicates-free array.
 */
function uniq(arr) {
    'use strict';

    var newArr = [],
        len = arr.length,
        i,
        j,
        found;

    for (i = 0; i < len; i += 1) {
        found = undefined;

        for (j = 0; j < newArr.length; j += 1) {
            if (arr[i] === newArr[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = uniq;
}
