'use strict';

/**
 * Creates a function that invokes `fn` while it’s called less than `n` times.
 * `fn` is invoked with the this binding and arguments of the created function.
 *
 * @param {Number} n The number of calls before `fn` is no longer invoked.
 * A positive integer is expected.
 * If a negative number or 0, `fn` is never invoked.
 * If `NaN`, `-Infinity` or `Infinity`, `fn` is never invoked.
 * @param {function} func The function to restrict.
 * @throws {TypeError} If `n` is not number.
 * @throws {TypeError} If `fn` is not function.
 * @returns {function} Returns the new restricted function.
 * @example
 *
 * const doSomething = before(6, () => console.log('Do something...'));
 *
 * button.addEventListener('click', doSomething);
 * // => logs "Do something..." up to 5 times.
 */
const before = (n, fn) => {
  let result;

  if (typeof n !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  n = parseInt(n, 10);

  return (...args) => {
    if (--n > 0) {
      result = fn(...args);
    }

    if (n <= 1) {
      fn = void 0;
    }

    return result;
  };
};

module.exports = before;
