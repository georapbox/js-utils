/**
 * Sorts an array of objects (not in place) by property.
 * @param {Array} arr The array to sort.
 * @param {String} field The field to sort the array by.
 * @param {Boolean} [ascending=true] Defines the sort order. Default is true (ascending).
 *        This is not optional if `primer` is required.
 * @param {Function} [primer] Manipulates the field to sort by.
 * @returns {Array} The new sorted array.
 */
function sortBy(arr, field, ascending, primer) {
    'use strict';

    var key = function (x) {
        return primer ? primer(x[field]) : x[field];
    };

    return arr.slice().sort(function (a, b) {
        var A = key(a),
            B = key(b);

        if (typeof ascending !== 'boolean') {
            ascending = true;
        }

        return ((A < B) ? -1 : ((A > B) ? 1 : 0)) * [-1, 1][+!!ascending];
    });
}
