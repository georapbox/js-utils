'use strict';

/**
 * Creates a function that invokes `func` while it’s called less than `n` times.
 * `func` is invoked with the this binding and arguments of the created function.
 *
 * @param {Number} n The number of calls before `func` is no longer invoked.
 *        A positive integer is expected.
 *        If a negative number or 0, `func` is never invoked.
 *        If `NaN`, `-Infinity` or `Infinity`, `func` is never invoked.
 * @param {function} func The function to restrict.
 * @throws {TypeError} If `n` is not number.
 * @throws {TypeError} If `func` is not function.
 * @return {function} Returns the new restricted function.
 * @example
 *
 * var doSomething = before(6, function () {
 *   console.log('Do something...');
 * });
 *
 * button.addEventListener('click', doSomething);
 * // -> logs "Do something..." up to 5 times.
 */
function before(n, func) {
  var result;

  if (typeof n !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  n = parseInt(n, 10);

  return function () {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }

    if (n <= 1) {
      func = void 0;
    }

    return result;
  };
}

module.exports = before;