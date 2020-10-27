'use strict';

/**
 * Creates an array of unique values that are included in all given arrays.
 * The order of result values is determined by the order they occur in the first array.
 *
 * @NOTE To support legacy browsers use `Array.prototype.reduce`, `Array.prototype.filter` and `Array.prototype.includes` polyfills.
 * @NOTE Internal usage of Array > `includes` function.
 * @category Array
 * @param {Array} arrays The arrays to intersect.
 * @throws {TypeError} If any of the arguments is not array.
 * @return {Array} The array of intersecting values.
 * @example
 *
 * var arrA = [NaN, 3, 8, 'foo', 'bar'];
 * var arrB = [2, 7, 'foo', NaN, 3];
 * var arrC = [1, 2, 3, NaN];
 *
 * intersect(arrA, arrB);
 * // -> [NaN, 3, 'foo']
 *
 * intersect(arrA, arrB, arrC);
 * // -> [NaN, 3]
 */
function intersect(/* arrays */) {
  var arrayProto = Array.prototype;
  var objectProto = Object.prototype;
  var toString = objectProto.toString;
  var slice = arrayProto.slice;
  var args = slice.call(arguments, 0);
  var argsLength = args.length;

  while (argsLength--) {
    if (toString.call(args[argsLength]) !== '[object Array]') {
      throw new TypeError('Expected an array');
    }
  }

  return args.reduce(function (accum, current) {
    return accum.filter(function (item) {
      return current.includes(item);
    });
  });
}

module.exports = intersect;