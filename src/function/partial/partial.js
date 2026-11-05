/**
 * Creates a function that invokes `fn` with the specified partial arguments
 * prepended to the arguments provided when the returned function is called.
 *
 * The returned function preserves the caller's `this` binding and
 * forwards the return value of `fn`.
 * If no partial arguments are provided, all arguments are forwarded unchanged.
 *
 * @param {function} fn The function to partially apply.
 * @param {...any} partials The arguments to prepend.
 * @returns {function} The partially applied function.
 * @throws {TypeError} If `fn` is not a function.
 * @example
 *
 * const greet = (greeting, firstName, lastName) =>
 *   `${greeting}, ${firstName} ${lastName}!`;
 *
 * const sayHello = partial(greet, 'Hello');
 *
 * sayHello('John', 'Doe');
 * // => 'Hello, John Doe!'
 *
 * const fn = partial((...args) => args, 1, 2);
 *
 * fn(3, 4);
 * // => [1, 2, 3, 4]
 */
export function partial(fn, ...partials) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return function (...args) {
    return fn.apply(this, [...partials, ...args]);
  };
}
