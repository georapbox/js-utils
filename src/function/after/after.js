/**
 * Creates a function that invokes `fn` after it has been called
 * at least `n` times.
 *
 * Once the threshold is reached, `fn` is invoked on every subsequent
 * call with the same `this` binding and arguments.
 * If `n` is zero or negative, `fn` is invoked on the first call.
 *
 * @param {number} n The call-count boundary. Must be an integer.
 * @param {function} fn The function to invoke.
 * @returns {function} The new function.
 * @throws {TypeError} If `n` is not an integer or `fn` is not a function.
 * @example
 *
 * const callback = after(3, () => console.log('Hello'));
 *
 * callback(); // Nothing
 * callback(); // Nothing
 * callback(); // Logs 'Hello'
 * callback(); // Logs 'Hello'
 *
 * const doSomething = after(4, () => console.log('Do something...'));
 *
 * button.addEventListener('click', doSomething);
 * // Logs 'Do something...' from the fourth click onward.
 */
export function after(n, fn) {
  if (!Number.isInteger(n)) {
    throw new TypeError('Expected an integer for first argument');
  }

  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  let remaining = Math.max(0, n);

  return function (...args) {
    if (remaining > 0) {
      remaining -= 1;
    }

    if (remaining === 0) {
      return fn.apply(this, args);
    }
  };
}
