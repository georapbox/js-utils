'use strict';

/**
 * Creates a function that negates the result of the predicate `fn`.
 * The `fn` predicate is invoked with the arguments of the created function.
 *
 * @param {function} fn The predicate to negate.
 * @throws {TypeError} If `fn` is not function.
 * @returns {function} Returns the new function.
 * @example
 *
 * // Example 1
 * const isString = val => typeof val === 'string';
 *
 * const isNotString = negate(isString);
 *
 * isString('lorem ipsum');
 * // => true
 *
 * isNotString('lorem ipsum');
 * // => false
 *
 * // Example 2
 * const isEven = n => n % 2 === 0;
 *
 * const numbers = [1, 2, 3, 4, 5, 6];
 *
 * const evens = numbers.filter(isEven);
 * // => [2, 4, 6]
 *
 * const odds = numbers.filter(negate(isEven));
 * // => [1, 3, 5]
 */
const negate = fn => {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return (...args) => !fn(...args);
};

module.exports = negate;
