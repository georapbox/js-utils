'use strict';

/**
 * Finds the largest of zero or more numbers.
 *
 * @category Math
 * @param {Number|Array} [args...] A set of numbers as arguments, or an array of numbers as the only argument.
 * @return {Number} The largest number from the arguments provided.
 * @example
 *
 * max(5);
 * // -> 5
 *
 * max([1, -10, 1024, 1024.5, 29]);
 * // -> 1024.5
 *
 * max(5, 10, 154, 4, 8, 87);
 * // -> 154
 *
 * max(NaN, 10);
 * // -> NaN
 *
 * max('', '1');
 * // -> 1
 *
 * max(0, true);
 * // -> 1
 *
 * max(false);
 * // -> 0
 *
 * max();
 * // -> -Infinity
 */
function max() {
  return arguments.length === 1 && Object.prototype.toString.call(arguments[0]) === '[object Array]'
    ? Math.max.apply(null, arguments[0])
    : Math.max.apply(null, arguments);
}

module.exports = max;