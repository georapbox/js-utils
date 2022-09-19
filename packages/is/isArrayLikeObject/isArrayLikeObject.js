'use strict';

/**
 * Checks if a value is array-like and object as well.
 *
 * A value is considered array-like if it’s not a function and has a `value.length` that’s an
 * integer greater than or equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value is array-like and object, else false.
 * @example
 *
 * function noop() {}
 *
 * function dummy(...args) {
 *   return args;
 * }
 *
 * const args = dummy();
 *
 * isArrayLikeObject([1, 2, 3]));
 * // => true
 *
 * isArrayLikeObject('abc'));
 * // => false
 *
 * isArrayLikeObject(0));
 * // => false
 *
 * isArrayLikeObject({foo: 'bar'}));
 * // => false
 *
 * isArrayLikeObject(noop));
 * // => false
 *
 * isArrayLikeObject(null));
 * // => false
 *
 * isArrayLikeObject());
 * // => false
 *
 * isArrayLikeObject(document.body.children);
 * // => true
 *
 * isArrayLikeObject(args));
 * // => true
 */
const isArrayLikeObject = value => {
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
  const len = !!value && value.length;

  return value != null
    && typeof value !== 'function'
    && typeof value === 'object'
    && typeof len === 'number'
    && len > -1
    && len % 1 === 0
    && len <= MAX_SAFE_INTEGER;
};

module.exports = isArrayLikeObject;
