'use strict';

/**
 * Checks if a value is an iterable.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if value is iterable; otherwise `false`.
 * @throws {TypeError} If `Symbol` or `Symbol.iterator` is not supported by the environment.
 * @example
 *
 * function* generatorFunc() {
 *   yield 'foo';
 * }
 *
 * isIterable([]);
 * // => true
 *
 * isIterable(new Map());
 * // => true
 *
 * isIterable('');
 * // => true
 *
 * isIterable(generatorFunc());
 * // => true
 *
 * isIterable({});
 * // => false
 *
 * isIterable(0);
 * // => false
 *
 * isIterable(null);
 * // => false
 */
const isIterable = value => {
  if (typeof Symbol === 'undefined' || !Symbol.iterator) {
    throw new TypeError('Symbol or Symbol.iterator is not supported by your environment.');
  }

  if (value == null) {
    return false;
  }

  return typeof value[Symbol.iterator] === 'function';
};

module.exports = isIterable;
