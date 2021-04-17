'use strict';

/**
 * Checks if a value is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if value is object-like, else `false`.
 * @example
 *
 * isObjectLike({});
 * // -> true
 *
 * isObjectLike([1, 2, 3]);
 * // -> true
 *
 * isObjectLike(function noop() {});
 * // -> false
 *
 * isObjectLike(null);
 * // -> false
 */
function isObjectLike(value) {
  return value != null && typeof value === 'object';
}

module.exports = isObjectLike;
