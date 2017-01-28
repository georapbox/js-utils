/**
 * Deep merge the contents of two or more objects together into the first object.
 *
 * Keep in mind that the target object (first argument) will be modified, and will also be returned from `extend()`.
 * If, however, you want to preserve both of the original objects, you can do so by passing an empty object as the target:
 *
 * `var object = extend({}, object1, object2);`
 *
 * @param {Object} target An object that will receive the new properties if additional objects are passed.
 * @param {Object} object1 An object containing additional properties to merge in.
 * @param {Object} [objectN] Additional objects containing properties to merge in.
 * @return {Object} The merged object.
 * @example
 *
 * var defaults = {validate: false, limit: 5, name: "foo"};
 * var options = {validate: true, name: "bar"};
 *
 * // Merge defaults and options, without modifying the defaults.
 * var settings = extend({}, defaults, options);
 *
 * // -> defaults -- {"validate": false, "limit": 5, "name": "foo"}
 * // -> options -- {"validate": true, "name": "bar"}
 * // -> settings -- {"validate": true, "limit": 5, "name": "bar"}
 */
function _extend() {
  'use strict';

  var i = 1,
    len = arguments.length,
    key, arg, val;

  for (; i < len; i += 1) {
    arg = arguments[i];

    for (key in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, key)) {
        val = arg[key];

        if (val && val.constructor && val.constructor === Object) {
          arguments[0][key] = arguments[0][key] || {};
          _extend(arguments[0][key], val);
        } else {
          arguments[0][key] = val;
        }
      }
    }
  }

  return arguments[0];
}
