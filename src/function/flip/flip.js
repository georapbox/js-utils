/**
 * Creates a function that invokes `fn` with its arguments in reverse order.
 *
 * The returned function preserves the caller's `this` binding and
 * forwards the return value of `fn`.
 * All arguments are reversed, regardless of the function's declared arity.
 *
 * @param {function} fn The function whose arguments to reverse.
 * @returns {function} The new function with reversed arguments.
 * @throws {TypeError} If `fn` is not a function.
 * @example
 *
 * const flipped = flip((...args) => args);
 *
 * flipped(1, 2, 3, 4);
 * // => [4, 3, 2, 1]
 *
 * const subtract = (a, b) => a - b;
 * const flippedSubtract = flip(subtract);
 *
 * flippedSubtract(10, 3);
 * // => -7
 */
export function flip(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return function (...args) {
    return fn.apply(this, args.reverse());
  };
}
