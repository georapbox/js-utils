'use strict';

/**
 * Creates a function that invokes the original function with its parameters reversed.
 *
 * @param {function} fn The function to invoke with its parameters reversed.
 * @throws {TypeError} Throws if `fn` is not a function.
 * @returns {function} Returns the new flipped function.
 * @example
 *
 * const flipped = flip((...args) => args);
 *
 * flipped(1, 2, 3, 4); // => [4, 3, 2, 1]
 */
const flip = fn => {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return (...args) => fn(...args.reverse());
};

module.exports = flip;
