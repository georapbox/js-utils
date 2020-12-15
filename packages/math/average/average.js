'use strict';

/**
 * Calculates the average of a set of numbers.
 * Accepts any number of numbers as parameters, or an array of numbers.
 * Ommits any non number value.
 *
 * @param {Number|Array} [...args] A set of numbers or an array of numbers.
 * @return {Number} The average number of the set of data provided.
 * @example
 *
 * average(5, 10, 50, -45, 6, 7); // -> 5.5
 * average([5, 10, 50, -45, 6, 7]); // -> 5.5
 *
 * average(2, 4, 0, -0); // -> 1.5
 * average([2, 4, 0, -0]); // ->
 *
 * average(7); // -> 7
 * average([7]); // -> 7
 *
 * average(0, -0); // -> 0
 * average([0, -0]); // -> 0
 *
 * average(); // -> 0
 * average([]); // -> 0
 *
 * average(Infinity, -Infinity, 0, -0, null, NaN, undefined, false, true, 'foo'); // -> 0
 * average([Infinity, -Infinity, 0, -0, null, NaN, undefined, false, true, 'foo']); // -> 0
 *
 * average(5, 4, null, true, '12', Infinity); // -> 0
 * average([5, 4, null, true, '12', Infinity]); // -> 0
 */
function average(/* ...args */) {
  var sum = 0;
  var count = 0;
  var len = arguments.length;
  var args = new Array(len);
  var index = 0;
  var arg;

  for (; index < len; index += 1) {
    args[index] = arguments[index];
  }

  if (len === 1 && Array.isArray(args[0])) {
    args = args[0];
    len = args.length;
  }

  while (len--) {
    arg = args[len];

    if (isFinite(arg) && typeof arg === 'number') { // equivalent of Number.isFinite
      sum += arg;
      count += 1;
    }
  }

  return count > 0 ? sum / count : 0;
}

module.exports = average;
