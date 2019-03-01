/**
 * Limits the number of times a function can be called in a given period.
 *
 * @category Function
 * @param {function} func The function to be executed.
 * @param {Number} [limit=0] Optional. Default value is 0. Time of delay in milliseconds.
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
function throttle(func, limit) {
  'use strict';

  var lastFunc, lastRan;

  return function () {
    var context = this;
    var args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, (limit - (Date.now() - lastRan)) || 0);
    }
  };
}
