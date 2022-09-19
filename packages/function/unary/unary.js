'use strict';

/**
 * Creates a function that accepts up to one argument, ignoring any additional arguments.
 *
 * @param {function} fn The function to cap arguments for.
 * @throws {TypeError} Throws if `fn` is not function.
 * @returns {function} Returns the new capped function.
 * @example
 *
 * const array = ['1', '2', '3'];
 *
 * const toInteger = unary(parseInt);
 *
 * array.map(toInteger); // => [1, 2, 3]
 */
const unary = fn => {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return arg => fn(arg);
};

module.exports = unary;
