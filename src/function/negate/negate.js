/**
 * Creates a function that negates the truthiness of the result returned by `fn`.
 *
 * The returned function forwards all arguments to `fn` and preserves
 * the caller's `this` binding. The result is always a boolean.
 *
 * @param {function} fn The predicate to negate.
 * @returns {function} The new function that returns the negated result.
 * @throws {TypeError} If `fn` is not a function.
 * @example
 *
 * const isString = value => typeof value === 'string';
 * const isNotString = negate(isString);
 *
 * isNotString('hello');
 * // => false
 *
 * isNotString(42);
 * // => true
 *
 * const isEven = number => number % 2 === 0;
 * const numbers = [1, 2, 3, 4, 5, 6];
 *
 * numbers.filter(isEven);
 * // => [2, 4, 6]
 *
 * numbers.filter(negate(isEven));
 * // => [1, 3, 5]
 */
export function negate(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return function (...args) {
    return !fn.apply(this, args);
  };
}
