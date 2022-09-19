'use strict';

/**
 * Creates a function that invokes `fn` once it's called `n` or more times.
 * `fn` is invoked with the this binding and arguments of the created function.
 *
 * @param {Number} n The number of calls before `fn` is invoked.
 * A positive integer is expected.
 * If a negative number or 0, `fn` is invoked immediately.
 * If `NaN`, `-Infinity` or `Infinity`, `fn` is never invoked.
 * @param {function} fn The function to restrict.
 * @throws {TypeError} If `n` is not number.
 * @throws {TypeError} If `fn` is not function.
 * @returns {function} The new restricted function.
 * @example
 *
 * const doSomething = after(4, () => console.log('Do something...');
 *
 * button.addEventListener('click', doSomething);
 * // => logs "Do something..." after button is clicked at least 4 times.
 */
const after = (n, fn) => {
  if (typeof n !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  n = parseInt(n, 10);

  return (...args) => {
    if (--n < 1) {
      return fn(...args);
    }
  };
};

module.exports = after;
