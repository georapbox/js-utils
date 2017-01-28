/**
 * Merge the contents of two or more objects together into the first object.
 *
 * Keep in mind that the target object (first argument) will be modified, and will also be returned from `extend()`.
 * If, however, you want to preserve both of the original objects, you can do so by passing an empty object as the target:
 *
 * `var object = extend({}, object1, object2);`
 *
 * The merge performed by `extend()` is not recursive by default; if a property of the first object
 * is itself an object or array, it will be completely overwritten by a property with the same key
 * in the second or subsequent object. The values are not merged.
 * However, by passing true for the first function argument, objects will be recursively merged.
 *
 * **Warning:** Passing false for the first argument is not supported.
 *
 * Undefined properties are not copied. However, properties inherited from the object's prototype will be copied over.
 * Properties that are an object constructed via new MyCustomObject(args), or built-in JavaScript types such as
 * Date or RegExp, are not re-constructed and will appear as plain Objects in the resulting object or array.
 *
 * On a deep extend, Object and Array are extended, but object wrappers on primitive types such as
 * String, Boolean, and Number are not. Deep-extending a cyclical data structure will result in an error.
 *
 * @category Object
 * @function extend
 * @param {Boolean} [deep=false] If true, the merge becomes recursive (aka. deep copy).
 * @param {Object} target An object that will receive the new properties if additional objects are passed.
 * @param {Object} object1 An object containing additional properties to merge in.
 * @param {Object} [objectN] Additional objects containing properties to merge in.
 * @return {Object} The merged object.
 * @example
 *
 * // EXAMPLE 1
 * // Merge two objects, modifying the first.
 * var object1 = {
 *   apple: 0,
 *   banana: {weight: 52, price: 100},
 *   cherry: 97
 * };
 *
 * var object2 = {
 *   banana: {price: 200},
 *   durian: 100
 * };
 *
 * extend(object1, object2);
 * // -> {"apple": 0, "banana": {"price": 200}, "cherry": 97, "durian": 100}
 *
 * // EXAMPLE 2
 * // Merge two objects recursively, modifying the first.
 * var object1 = {
 *   apple: 0,
 *   banana: {weight: 52, price: 100},
 *   cherry: 97
 * };
 * var object2 = {
 *   banana: {price: 200},
 *   durian: 100
 * };
 *
 * extend(true, object1, object2);
 * // -> {"apple": 0, "banana": {"weight": 52, "price": 200}, "cherry": 97, "durian": 100}
 *
 * // EXAMPLE 3
 * var defaults = {validate: false, limit: 5, name: "foo"};
 * var options = {validate: true, name: "bar"};
 *
 * // Merge defaults and options, without modifying defaults
 * var settings = extend({}, defaults, options);
 *
 * // -> defaults -- {"validate": false, "limit": 5, "name": "foo"}
 * // -> options -- {"validate": true, "name": "bar"}
 * // -> settings -- {"validate": true, "limit": 5, "name": "bar"}
 */
(function (name, context, definition) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else {
    context[name] = definition(name, context);
  }
}('extend', this, function () {
  'use strict';

  function type(obj) {
    var checker = {},
      types = 'Boolean Number String Function Array Date RegExp Object'.split(' '),
      index;

    for (index in types) {
      checker['[object ' + types[index] + ']'] = types[index].toLowerCase();
    }

    return obj == null
      ? String(obj)
      : checker[Object.prototype.toString.call(obj)] || 'object';
  }

  function isFunction(obj) {
    return type(obj) === 'function';
  }

  function isPlainObject(value) {
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

  function isArray(obj) {
    return type(obj) === 'array';
  }

  return function extend() {
    var options, name, src, copy, copyIsArray, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target;
      target = arguments[1] || {};
      // skip the boolean and the target
      i = 2;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object' && !isFunction(target)) {
      target = {};
    }

    for (; i < length; i += 1) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name];

          // Prevent never-ending loop
          if (target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            }

            // Never move original objects, clone them
            target[name] = extend(deep, clone, copy);

          // Don't bring in undefined values
          } else if (typeof copy !== 'undefined') {
            target[name] = copy;
          }
        }
      }
    }

    // Return the modified object
    return target;
  };
}));
