'use strict';

/**
 * Checks if a value is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".
 *
 * @param {*} value The value to check.
 * @returns {Boolean} Returns `true` if value is object-like, else `false`.
 * @example
 *
 * isObjectLike({});
 * // => true
 *
 * isObjectLike(Object.create({}));
 * // => true
 *
 * isObjectLike(Object.create(null));
 * // => true
 *
 * isObjectLike([1, 2, 3]);
 * // => true
 *
 * isObjectLike(new Number(0));
 * // => true
 *
 * isObjectLike(new String('Hello world'));
 * // => true
 *
 * isObjectLike(new RegExp('s+')));
 * // => true
 *
 * isObjectLike(/s+/);
 * // => true
 *
 * isObjectLike(new Map());
 * // => true
 *
 * isObjectLike(new Set());
 * // => true
 *
 * isObjectLike(0);
 * // => false
 *
 * isObjectLike('Hello world');
 * // => false
 *
 * isObjectLike(function noop() {});
 * // => false
 *
 * isObjectLike(null);
 * // => false
 *
 * isObject(Boolean(1));
 * // => false
 *
 * isObjectLike(Symbol('foo'));
 * // => false
 */
const isObjectLike = value => !!value && typeof value === 'object';

module.exports = isObjectLike;
