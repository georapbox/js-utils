'use strict';

/**
 * Transforms a function of N arguments in such a way that it can
 * be called as a chain of N functions each with a single argument (arity: 1).
 *
 * @param {function} func The initial function to be curried.
 * @param {Number} [arity=func.length] The arity of the provided function.
 * Useful in cases that arity cannot be determined by `func.length`.
 * As of ES2015 when a function has a rest parameter or at least one
 * parameter with default value, the `func.length` is not properly calculated.
 * @throws {TypeError} Throws if `func` is not a function.
 * @throws {TypeError} Throws if `arity` is not a number but not undefined.
 * @returns {function} A curried equivalent of the provided function
 * @example
 *
 * var add = curry(function (a, b) {
 *   return a + b;
 * });
 *
 * var addOne = add(1);
 * addOne(2); // -> 3
 *
 * // Provide arity as second argument in cases that it cannot be determined.
 * var add = curry(function (a = 0, ...args) {
 *   return a + args[0] + args[1];
 * }, 3);
 *
 * var addOne = add(1);
 * var addTwo = addOne(2);
 * addTwo(3); // -> 6
 */
function curry(func, arity) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  if (typeof arity !== 'undefined' && typeof arity !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  return function curried() {
    for (var _len = arguments.length, args_a = new Array(_len), _key = 0; _key < _len; _key++) {
      args_a[_key] = arguments[_key];
    }

    return args_a.length >= (arity || func.length) ? func.apply(void 0, args_a) : function () {
      for (var _len2 = arguments.length, args_b = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args_b[_key2] = arguments[_key2];
      }

      return curried.apply(void 0, args_a.concat(args_b));
    };
  };
}

module.exports = curry;