'use strict';

/**
 * Limits the number of times a function can be called in a given period.
 *
 * @param {function} func The function to be executed.
 * @param {Number} [wait=0] Optional. Default value is 0. Time of delay in milliseconds.
 * @throws {TypeError} If `func` is not function.
 * @returns {function} The throttled function.
 * @example
 *
 * // A method that should be called no more than 4 times per second.
 * var throttledHandler = throttle(function () {
 *   // Do your thing here...
 * }, 250);
 *
 * window.addEventListener('resize', throttledHandler, false);
 */
function throttle(func, wait) {
  var timerId, lastRan;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return function throttled() {
    var context = this;
    var args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(function () {
        if ((Date.now() - lastRan) >= wait) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, (wait - (Date.now() - lastRan)) || 0);
    }
  };
}

module.exports = throttle;
