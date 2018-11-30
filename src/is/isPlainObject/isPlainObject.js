/**
 * Checks if `value` is a plain object (created using `{}`,  `new Object()`, or `Object.create(null)`).
 *
 * @category Is
 * @NOTE Use with caution as host objects (or objects used by browser host environments to complete the execution environment of ECMAScript) have a number of inconsistencies which are difficult to robustly feature detect cross-platform.
 * @param {*} value The value to check.
 * @return {Boolean} True if `value` is a plain object, else false.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * isPlainObject({});
 * // -> true
 *
 * isPlainObject({foo: 'bar'});
 * // -> true
 *
 * isPlainObject(new Object({foo: 'bar'}));
 * // -> true
 *
 * isPlainObject(new Foo());
 * // -> false
 *
 * isPlainObject(Object.create(null));
 * // -> true
 *
 * isPlainObject(Object.create({}));
 * // -> false
 *
 * isPlainObject(Object.create({foo: 'bar'}));
 * // -> false
 *
 * isPlainObject([1, 2, 3]);
 * // -> false
 *
 * isPlainObject(null);
 * // -> false
 *
 * isPlainObject();
 * // -> false
 *
 * isPlainObject(100);
 * // -> false
 *
 * isPlainObject('lorem ipsum');
 * // -> false
 */
function isPlainObject(value) {
  'use strict';

  var toString = Object.prototype.toString;
  var proto;

  if (typeof value !== 'object' || value === null || toString.call(value) !== '[object Object]') {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}
