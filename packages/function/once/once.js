'use strict';

/**
 * Ensure a given functionality only runs once.
 *
 * @category Function
 * @param {function} func The function to restrict.
 * @param {*} [thisArg] Value to use as this when executing `func`.
 * @return {function} Returns the new restricted function.
 * @example
 *
 * var num = 0;
 * var canOnlyFireOnce = once(function () {
 *   return 'Number is now ' + (num += 1);
 * });
 *
 * canOnlyFireOnce();
 * // -> "Number is now 1"
 *
 * canOnlyFireOnce();
 * // -> "Number is now 1"
 */
function once(func, thisArg) {
  var result;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return function executeOnce() {
    if (func) {
      result = func.apply(thisArg || this, arguments);
      func = null;
    }
    return result;
  };
}

module.exports = once;