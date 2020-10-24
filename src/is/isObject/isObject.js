'use strict';

/**
 * Checks if `value` is the [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types) of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if "value" is an object, else false.
 * @example
 *
 * isObject({});
 * // -> true
 *
 * isObject(function test() {});
 * // -> true
 *
 * isObject([1, 2, 3]);
 * // -> true
 *
 * isObject('Hello World!');
 * // -> false
 *
 * isObject(false);
 * // -> false
 *
 * isObject(new String('Hello world'));
 * // -> true
 *
 * isObject();
 * // -> false
 */
function isObject(value) {
  return value != null && (typeof value === 'object' || typeof value === 'function');
}

module.exports = isObject;