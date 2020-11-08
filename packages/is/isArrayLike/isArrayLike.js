'use strict';

/**
 * Checks if value is array-like.
 * A value is considered array-like if it’s not a function and has a `value.length` that’s an
 * integer greater than or equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @param {*} value The value to check.
 * @return {Boolean} True if value is array-like, else false.
 * @example
 *
 * function noop() {}
 *
 * function dummy() {
 *   return arguments;
 * }
 *
 * var args = dummy();
 *
 * isArrayLike([1, 2, 3]));
 * // -> true
 *
 * isArrayLike('abc'));
 * // -> true
 *
 * isArrayLike(0));
 * // -> false
 *
 * isArrayLike({foo: 'bar'}));
 * // -> false
 *
 * isArrayLike(noop));
 * // -> false
 *
 * isArrayLike(null));
 * // -> false
 *
 * isArrayLike());
 * // -> false
 *
 * isArrayLike(document.body.children);
 * // -> true
 *
 * isArrayLike(args));
 * // -> true
 */
function isArrayLike(value) {
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
  var len = !!value && value.length;

  return value != null
    && typeof value !== 'function'
    && typeof len === 'number'
    && len > -1
    && len % 1 === 0
    && len <= MAX_SAFE_INTEGER;
}

module.exports = isArrayLike;