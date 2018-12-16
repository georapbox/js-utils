/**
 * Checks if 'value' is a function.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if 'value' is a function, else returns false.
 * @example
 *
 * isFunction(function test() {
 *   return 'This is test function.';
 * });
 * // -> true
 *
 * isFunction('This is a test function.');
 * // -> false
 */
function isFunction(value) {
  'use strict';

  var tag = Object.prototype.toString.call(value);
  var asyncTag = '[object AsyncFunction]';
  var funcTag = '[object Function]';
  var genTag = '[object GeneratorFunction]';
  return tag === asyncTag || tag === funcTag || tag === genTag;
}
