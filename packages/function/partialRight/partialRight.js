'use strict';

/**
 * Creates a new function that invokes the provided function `fn` with `partials` appended to the arguments it receives.
 *
 * @param {function} fn The function to partially apply arguments to.
 * @param {*} [...args] The arguments to be partially applied.
 * @throws {TypeError} Throws if `fn` is not a function.
 * @returns {function} Returns the new partially applied function.
 * @example
 *
 * const greet = (greeting, title, fname, lname) => `${greeting}, ${title} ${fname} ${lname}.`;
 * const greetMrJoeBlack = partialRight(greet, 'Mr.', 'Joe', 'Black');
 *
 * greetMrJoeBlack('Hello'); //=> Hello, Mr. Joe Black.
 */
const partialRight = (fn, ...args_a) => {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return (...args_b) => fn(...args_b, ...args_a);
};

module.exports = partialRight;
