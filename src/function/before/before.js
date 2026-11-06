/**
 * Creates a function that invokes `fn` while the number of calls
 * is less than `n`.
 *
 * The returned function preserves the caller's `this` binding and
 * arguments. Once the threshold is reached, subsequent calls return
 * the result of the last invocation without calling `fn` again.
 * If `n` is zero or negative, `fn` is never invoked.
 *
 * @param {number} n The call-count boundary. Must be an integer.
 * @param {function} fn The function to restrict.
 * @returns {function} The new restricted function.
 * @throws {TypeError} If `n` is not an integer or `fn` is not a function.
 * @example
 *
 * let count = 0;
 * const callback = before(3, () => ++count);
 *
 * callback(); // => 1
 * callback(); // => 2
 * callback(); // => 2
 * callback(); // => 2
 *
 * const doSomething = before(4, () => console.log('Do something...'));
 *
 * button.addEventListener('click', doSomething);
 * // Logs 'Do something...' on the first 3 clicks only.
 */
export function before(n, fn) {
  if (!Number.isInteger(n)) {
    throw new TypeError('Expected an integer for first argument');
  }

  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  let remaining = Math.max(0, n - 1);
  let result;

  return function (...args) {
    if (remaining > 0) {
      remaining--;
      result = fn.apply(this, args);
    }

    return result;
  };
}
