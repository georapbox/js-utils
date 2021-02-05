'use strict';

/**
 * Creates a function that accepts up to `n` arguments, ignoring any additional arguments.
 *
 * @param {function} func The function to cap arguments for.
 * @param {Number} n The arity cap.
 * @throws {TypeError} Throws if `func` is not function.
 * @throws {TypeError} Throws if `n` is not number.
 * @returns {function} Returns the new capped function.
 * @example
 *
 * var array = ['1', '2', '3'];
 *
 * var toInteger = ary(parseInt, 1);
 *
 * array.map(toInteger); // -> [1, 2, 3]
 */
function ary(func, n) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  if (typeof n !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  return function (/* ...args */) {
    var _len = arguments.length;
    var _key = 0;
    var args = new Array(_len);
    var arityCap = n > 0 ? n : 0;

    for (; _key < _len; _key += 1) {
      args[_key] = arguments[_key];
    }

    return func.apply(void 0, args.slice(0, arityCap));
  };
}

module.exports = ary;
