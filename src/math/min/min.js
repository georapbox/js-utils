/**
 * Finds the smallest of zero or more numbers.
 *
 * @category Math
 * @param {Number|Array} [...args] A set of numbers as arguments, or an array of numbers as the only argument.
 * @return {Number} The smallest number from the arguments provided.
 * @example
 *
 * min(5);
 * // -> 5
 *
 * min([1, -10, 1024, 1024.5, 29]);
 * // -> -10
 *
 * min(5, 10, 154, 4, 8, 87);
 * // -> 4
 *
 * min(NaN, 10);
 * // -> NaN
 *
 * min('', '1');
 * // -> 0
 *
 * min(0, true);
 * // -> 0
 *
 * min(false);
 * // -> 0
 *
 * min(true);
 * // -> 1
 *
 * min();
 * // -> Infinity
 */
function min() {
    'use strict';

    var toString = Object.prototype.toString;

    return arguments.length === 1 && toString.call(arguments[0]) === '[object Array]' ?
        Math.min.apply(null, arguments[0]) :
        Math.min.apply(null, arguments);
}
