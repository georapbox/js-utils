'use strict';

/**
 * Creates a function that accepts up to one argument, ignoring any additional arguments.
 *
 * @param {function} func The function to cap arguments for.
 * @throws {TypeError} Throws if `func` is not function.
 * @returns {function} Returns the new capped function.
 * @example
 *
 * var array = ['1', '2', '3'];
 *
 * var toInteger = unary(parseInt);
 *
 * array.map(toInteger); // -> [1, 2, 3]
 */
function unary(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return function (arg) {
    return func(arg);
  };
}

module.exports = unary;
