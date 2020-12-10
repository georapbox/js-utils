'use strict';

/**
 * Creates a function that invokes the original function with its parameters reversed.
 *
 * @param {function} func The function to invoke with its parameters reversed.
 * @throws {TypeError} Throws if `func` is not a function.
 * @returns {function} Returns the new flipped function.
 * @example
 *
 * var flipped = flip(function () {
 *   return Array.prototype.slice.call(arguments, 0);
 * });
 *
 * flipped(1, 2, 3, 4); // -> [4, 3, 2, 1]
 */
function flip(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return function flipped(/* ...args */) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return func.apply(void 0, args.reverse());
  };
}

module.exports = flip;
