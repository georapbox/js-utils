/**
 * Checks if `value` is a plain object (created using "{}" or "new Object").
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

  var hasOwn = {}.hasOwnProperty,
    toString = {}.toString,
    proto, ctor;

  // Detect obvious negatives.
  // Use toString to catch host objects.
  if (!value || toString.call(value) !== '[object Object]') {
    return false;
  }

  proto = Object.getPrototypeOf(value);

  // Objects with no prototype (e.g., `Object.create(null)`) are plain.
  if (!proto) {
    return true;
  }

  // Objects with prototype are plain if they were constructed by a global Object function.
  ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
  return typeof ctor === 'function' && hasOwn.toString.call(ctor) === hasOwn.toString.call(Object);
}
