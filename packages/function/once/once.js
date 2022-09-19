'use strict';

/**
 * Ensure a given functionality only runs once.
 *
 * @param {function} fn The function to restrict.
 * @throws {TypeError} If `fn` is not function.
 * @returns {function} Returns the new restricted function.
 * @example
 *
 * let num = 0;
 * const canOnlyFireOnce = once(() => num += 1);
 *
 * canOnlyFireOnce(); // => 1
 * canOnlyFireOnce(); // => 1
 */
const once = fn => {
  let result;

  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return (...args) => {
    if (fn) {
      result = fn(...args);
      fn = null;
    }

    return result;
  };
};

module.exports = once;
