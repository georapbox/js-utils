'use strict';

/**
 * Finds the smallest of zero or more numbers.
 *
 * NOTE: The following function uses `Function.prototype.apply` to get the maximum of an array.
 * This should be avoided for arrays with relatively many elements. See links below for more details:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions
 *
 * @param {...Number|Array} [...args] A set of numbers as arguments, or an array of numbers as the only argument.
 * @returns {Number} The smallest number from the arguments provided.
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
  return arguments.length === 1 && Array.isArray(arguments[0])
    ? Math.min.apply(null, arguments[0])
    : Math.min.apply(null, arguments);
}

module.exports = min;
