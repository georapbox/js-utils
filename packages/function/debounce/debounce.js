'use strict';

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * 'n' milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {function} func The function to be executed.
 * @param {Number} [wait] Time of delay in milliseconds. It is required if `immediate` is used.
 * @param {Boolean} [immediate] If true or any truthy value, triggers the function on the leading edge.
 * @throws {TypeError} If `func` is not function.
 * @return {function} A new debounced function.
 * @example
 *
 * var debouncedHandler = debounce(function () {
 *   // Do your thing here...
 * }, 250);
 *
 * window.addEventListener('resize', debouncedHandler, false);
 */
function debounce(func, wait, immediate) {
  var timerId = null;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return function debounced() {
    var context = this;
    var args = arguments;
    clearTimeout(timerId);

    if (immediate && !timerId) {
      func.apply(context, args);
    }

    timerId = setTimeout(function () {
      timerId = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);
  };
}

module.exports = debounce;
