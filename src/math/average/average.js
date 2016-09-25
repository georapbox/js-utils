/**
 * Calculates the average of a set of numbers.
 * Accepts any number of numbers as parameters, or an array of numbers.
 * Ommits any non number value.
 *
 * @category Math
 * @param {Number|Array} [args...] A set of numbers or an array of numbers.
 * @return {Number} The average number of the set of data provided.
 * @example
 *
 * average();
 * // -> 0
 *
 * average(7);
 * // -> 7
 *
 * average([7]);
 * // -> 7
 *
 * average(2, 4);
 * // -> 3
 *
 * average([2, 4]);
 * // -> 3
 *
 * average(5, 10, 50, -45, 6, 7);
 * // -> 5.5
 *
 * average([5, 10, 50, -45, 6, 7]);
 * // -> 5.5
 *
 * average(5, 4, null, true, '12', Infinity);
 * // -> 4.5 (Omits any non number value)
 */
function average(/* args... */) {
  'use strict';

  var sum = 0,
    count = 0,
    argsLen = arguments.length,
    toString = Object.prototype.toString,
    len, args, argItem;

  // Check if arguments is a set of numbers or an array of numbers.
  if (argsLen > 1 || argsLen === 1 && typeof arguments[0] === 'number') {
    args = arguments;
    len = argsLen;
  } else if (argsLen === 1 && toString.call(arguments[0]) === '[object Array]') {
    args = arguments[0];
    len = args.length;
  }

  while (len--) {
    argItem = args[len];

    // Ommit any non number value.
    if (isFinite(argItem) && typeof argItem === 'number') {
      sum += argItem;
      count += 1;
    }
  }

  return count > 0 ? sum / count : 0;
}
