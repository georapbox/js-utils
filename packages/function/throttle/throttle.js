'use strict';

/**
 * Limits the number of times a function can be called in a given period.
 *
 * @param {function} fn The function to be executed.
 * @param {Number} [wait=0] Optional. Default value is 0. Time of delay in milliseconds.
 * @throws {TypeError} If `fn` is not function.
 * @returns {function} The throttled function.
 * @example
 *
 * // A method that should be called no more than 4 times per second.
 * const throttledHandler = throttle(() => {
 *   // Do your thing here...
 * }, 250);
 *
 * window.addEventListener('resize', throttledHandler, false);
 */
const throttle = (fn, wait = 0) => {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  let timerId, lastRan;

  return (...args) => {
    if (!lastRan) {
      fn(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        if (Date.now() - lastRan >= wait) {
          fn(...args);
          lastRan = Date.now();
        }
      }, wait - (Date.now() - lastRan) || 0);
    }
  };
};

module.exports = throttle;
