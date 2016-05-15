
/**
 * Removes duplicate primitive values from an array.
 *
 * @category Array
 * @param {Array} array The array to process.
 * @return {Array} Returns the result (duplicates-free) array.
 * @example
 *
 * uniq(['a', 'a', 'b', true, '2', 2, false, true]);
 * // -> ['a', 'b', true, '2', 2, false]
 */
function uniq(array) {
    'use strict';

    var newArr, len, i, j, found;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    newArr = [];
    len = array.length;

    for (i = 0; i < len; i += 1) {
        found = undefined;

        for (j = 0; j < newArr.length; j += 1) {
            if (array[i] === newArr[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            newArr.push(array[i]);
        }
    }

    return newArr;
}
