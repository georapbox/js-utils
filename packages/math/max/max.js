'use strict';

/**
 * Finds the largest of zero or more numbers.
 *
 * NOTE: Prefer using an array of numbers if you want to compare a relatively large amount of numbers.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array
 *
 * @param {...Number|Array} [...nums] A set of numbers as arguments, or an array of numbers as the only argument.
 * @returns {Number} The largest number from the arguments provided.
 * @example
 *
 * max(5);
 * // => 5
 *
 * max([1, -10, 1024, 1024.5, 29]);
 * // => 1024.5
 *
 * max(5, 10, 154, 4, 8, 87);
 * // => 154
 *
 * max(NaN, 10);
 * // => NaN
 *
 * max('', '1');
 * // => 1
 *
 * max(0, true);
 * // => 1
 *
 * max(false);
 * // => 0
 *
 * max();
 * // => -Infinity
 */
const max = (...nums) => {
  if (nums.length === 1 && Array.isArray(nums[0])) {
    nums = nums[0];
  }

  return nums.reduce((a, b) => Math.max(a, b), -Infinity);
};

module.exports = max;
