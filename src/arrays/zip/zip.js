/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 * @param {Array} [args...] The arrays to process.
 * @return {Array} The new array of grouped elements.
 */
function zip(/*, args...*/) {
    'use strict';

    var slice = Array.prototype.slice,
        args = slice.call(arguments),
        // Find the longest of the arrays, to begin mapping from this one.
        longest = args.reduce(function (a, b) {
            return a.length > b.length ? a : b;
        }, []);

    return longest.map(function (item, index) {
        return args.map(function (array) {
            return array[index];
        });
    });
}
