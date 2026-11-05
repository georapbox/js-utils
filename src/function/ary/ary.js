/**
 * Creates a function that invokes `fn` with at most `cap` arguments,
 * ignoring any additional arguments.
 *
 * The returned function preserves the caller's `this` binding and
 * forwards the return value of `fn`.
 * If `cap` is zero or negative, no arguments are forwarded.
 *
 * @param {function} fn The function to restrict.
 * @param {number} cap The maximum number of arguments to forward. Must be an integer.
 * @returns {function} The new function with capped arguments.
 * @throws {TypeError} If `fn` is not a function or `cap` is not an integer.
 * @example
 *
 * const fn = ary((...args) => args, 2);
 *
 * fn(1, 2, 3, 4);
 * // => [1, 2]
 *
 * const sum = (a, b, c) => a + b + (c ?? 0);
 * const sumTwo = ary(sum, 2);
 *
 * sumTwo(10, 20, 30);
 * // => 30
 *
 * const array = ['1', '2', '3'];
 * const toInteger = ary(parseInt, 1);
 *
 * array.map(toInteger);
 * // => [1, 2, 3]
 */
export function ary(fn, cap) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  if (!Number.isInteger(cap)) {
    throw new TypeError('Expected an integer for second argument');
  }

  const arityCap = Math.max(0, cap);

  return function (...args) {
    return fn.apply(this, args.slice(0, arityCap));
  };
}
