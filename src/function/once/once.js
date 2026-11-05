/**
 * Creates a function that invokes `fn` at most once.
 *
 * The first call invokes `fn` with the caller's `this` binding and
 * arguments. Subsequent calls return the result of the first invocation
 * without calling `fn` again.
 *
 * If the first invocation throws, the error is propagated and `fn`
 * is not invoked again.
 *
 * @param {function} fn The function to restrict.
 * @returns {function} The new function that can invoke `fn` only once.
 * @throws {TypeError} If `fn` is not a function.
 * @example
 *
 * let count = 0;
 * const callback = once(() => ++count);
 *
 * callback();
 * // => 1
 *
 * callback();
 * // => 1
 *
 * callback();
 * // => 1
 *
 * const greet = once((name) => `Hello, ${name}!`);
 *
 * greet('John');
 * // => 'Hello, John!'
 *
 * greet('Jane');
 * // => 'Hello, John!'
 */
export function once(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}
