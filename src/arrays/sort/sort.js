/**
 * Sorts an array of primitive values of the same type.
 * Any `null`, `undefined` or `NaN` values are removed from the result array.
 * If array values are of different type, the result is not guaranteed to be correct.
 * @NOTE: For legacy browsers use the `Array.prototype.map` and `Array.prototype.filter` polyfills.
 * @param {Array} array The array to sort.
 * @param {Boolean} [ascending=true] Defines the sort order. Default is true (ascending).
 * @return {Array} The new sorted array.
 */
function sort(array, ascending) {
    'use strict';

    // Remove any `null`, `undefined` or `NaN` values.
    var filtered = array.filter(function (el) {
        return el != null && el === el;
    });

    return filtered.map(function (el, idx) {
        return {
            index: idx,
            value: typeof el === 'string' ? el.toLowerCase() : el
        };
    }).sort(function (a, b) {
        if (ascending == null) {
            ascending = true;
        }
        return (a.value < b.value ? -1 : a.value > b.value ? 1 : 0) * [-1, 1][+!!ascending];
    }).map(function (el) {
        return filtered[el.index];
    });
}
