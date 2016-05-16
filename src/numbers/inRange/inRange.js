/**
 * Checks if a number is between start and up to but not including, end.
 * If start is greater than end the params are swapped to support negative ranges.
 *
 * @category Number
 * @param {Number} num The number to check.
 * @param {Number} start The start of the range.
 * @param {Number} end The end of the range.
 * @return {Boolean} True if number is in the range, else false.
 * @example
 *
 * inRange(3, 2, 4);
 * // -> true
 *
 * inRange(-3, -2, -6);
 * // -> true
 *
 * inRange(4, 8, 2);
 * // -> true
 *
 * inRange(4.5, 8.2, 2.1);
 * // -> true
 *
 * inRange('4.5', '8.2', '2.1');
 * // -> true (arguments can be cast to type "number")
 *
 * inRange(4, 8);
 * // -> false (all arguments are required)
 *
 * inRange(4);
 * // -> false (all arguments are required)
 *
 * inRange(4, 'b8', 'c2');
 * // -> false (all arguments must be of type "number")
 */
function inRange(num, start, end) {
    'use strict';
    return num >= Math.min(start, end) && num < Math.max(start, end);
}
