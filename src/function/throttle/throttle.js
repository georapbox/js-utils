/**
 * Limits the number of times a function can be called in a given period.
 *
 * @category Function
 * @param {function} func The function to be executed.
 * @param {Number} [n=0] Optional. Default value is 0. Time of delay in milliseconds.
 * @throws {TypeError} If `func` is not function.
 * @return {function} The throttled function.
 * @example
 *
 * // A method that should be called no more than 4 times per second.
 * var doSomething = throttle(function () {
 *   // Do something...
 * }, 250);
 *
 * window.addEventListener('resize', doSomething, false);
 */
function throttle(func, n) {
  'use strict';

  var wait;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  wait = false;

  return function () {
    if (!wait) {
      func.call();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, n || 0);
    }
  };
}
