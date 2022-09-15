'use strict';

/**
 * Creates a new function that invokes the provided function `fn` with `partials` prepended to the arguments it receives.
 *
 * @param {function} fn The function to partially apply arguments to.
 * @param {*} [...args] The arguments to be partially applied.
 * @throws {TypeError} Throws if `fn` is not a function.
 * @returns {function} Returns the new partially applied function.
 * @example
 *
 * const add = (a, b, c) => a + b + c;
 * const p1 = partial(add, 1);
 * p1(2, 3); // => 6
 *
 * const p2 = partial(add, 10, 20);
 * p2(30); // => 60
 *
 * const p3 = partial(add, 100, 200, 300);
 * p3(); // => 600
 *
 * const p4 = partial(add);
 * p4(5, 10, 15); // => 30
 */
const partial = (fn, ...args_a) => {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return (...args_b) => fn(...args_a, ...args_b);
};

module.exports = partial;
