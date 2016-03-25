/**
 * Checks if a number is between start and up to but not including, end.
 * If start is greater than end the params are swapped to support negative ranges.
 * @param {Number} num The number to check.
 * @param {Number} start The start of the range.
 * @param {Number} end The end of the range.
 * @return {Boolean} Returns true if number is in the range, else false.
 */
function inRange(num, start, end) {
    'use strict';
    return num >= Math.min(start, end) && num < Math.max(start, end);
}
