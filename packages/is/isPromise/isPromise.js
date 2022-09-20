'use strict';

/**
 * Check if a value is a native ES2015 Promise.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if value is a native ES2015 Promise; otherwise `false`.
 * @example
 *
 * isPromise(new Promise(resolve, reject));
 * // => true
 *
 * isPromise(Promise.resolve('Success'));
 * // => true
 *
 * isPromise(Promise.reject('Error'));
 * // => true
 *
 * isPromise(function () {
 *   return Promise.resolve('Success');
 * });
 * // => false
 */
const isPromise = value => {
  // Checking with `Object.prototype.toString` should be enough for most cases except for the
  // rare case that a host object's tag is modified via `Symbol.toStringTag`, eg:
  // const obj = {
  //   get [Symbol.toStringTag]() {
  //     return 'Promise';
  //   }
  // };
  // Therefore, we check if the value has a `then` and a `catch` function for extra safety.
  // Of course we can still get a false positive if we provide a `then` and a `catch` function to the host object
  // with the modified tag, but it should still cover most of the cases.
  return Object.prototype.toString.call(value) === '[object Promise]'
    && typeof value.then === 'function'
    && typeof value.catch === 'function';
};

module.exports = isPromise;
