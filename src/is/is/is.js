/**
 * **is** is a minimal API for the `Is` category functions that provides `not`, `all` and `any` interfaces,
 * so that they can be used in a more functional way.
 *
 * **is** exposes a global variable `is` with only 4 methods by default.
 * This gives the ability to add as many functions as one desires according to the project.
 *
 * @module is
 * @category Is
 * @example
 *
 * // Include the functions we want to use so that the become methods of the is object
 * is.extend({
 *   'array': isArray,
 *   'boolean': isBoolean,
 *   ...
 * });
 *
 * // Check if a value is array
 * is.array([1, 2, 3]);
 * // -> true
 *
 * is.array({foo: 'bar'});
 * // -> false
 *
 * // Check if a value is NOT an array
 * is.not.array([1, 2, 3]);
 * // -> false
 *
 * is.not.array({foo: 'bar'});
 * // -> true
 *
 * // Check if all values are arrays
 * is.all.array([1, 2, 3], ['a', 'b', 'c']);
 * // -> true
 *
 * is.all.array([1, 2, 3], 10);
 * // -> false
 *
 * // Check if any of the values are arrays
 * is.any.array([1, 2, 3], 10);
 * // -> true
 *
 * is.any.array(5, 10);
 * // -> false
 */
(function (name, context, definition) {
  'use strict';
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else if (typeof define === 'function' && define.amd) {
    define(definition);
  } else {
    context[name] = definition();
  }
}('is', this, function () {
  'use strict';

  var isAPI,                              // Holds the API methods
    interfaces = ['not', 'all', 'any']; // API interfaces

  // HELPERS
  /* -------------------------------------------------------------------------- */

  var ARRAY = '[object Array]',
    FUNCTION = '[object Function]';

  var toString = Object.prototype.toString,
    arraySlice = Array.prototype.slice,
    hasOwnProperty = Object.prototype.hasOwnProperty;

  function isFunction(value) {
    return typeof value === 'function' && toString.call(value) === FUNCTION;
  }

  function isArray(value) {
    return !!value && toString.call(value) === ARRAY;
  }

  function isPlainObject(value) {
    var proto, ctor;

    if (!value || toString.call(value) !== '[object Object]') {
      return false;
    }

    proto = Object.getPrototypeOf(value);

    if (!proto) {
      return true;
    }

    ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof ctor === 'function' && hasOwnProperty.toString.call(ctor) === hasOwnProperty.toString.call(Object);
  }

  function arrayIndexOf(array, value) {
    var i = 0,
      len = array.length;

    for (i; i < len; i += 1) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  // INTERFACE FUNCTIONS
  /* -------------------------------------------------------------------------- */

  /**
   * Calls the predicate function and reverses the sense of the predicate result.
   * @function not
   */
  function not(func) {
    return function () {
      return !func.apply(null, arraySlice.call(arguments));
    };
  }

  /**
   * Calls the predicate function per parameter and returns true if all pass.
   * @function all
   */
  function all(func) {
    return function () {
      var parameters = arraySlice.call(arguments),
        length = parameters.length,
        index;

      if (length === 1 && isArray(parameters[0])) {
        parameters = parameters[0];
        length = parameters.length;
      }

      for (index = 0; index < length; index += 1) {
        if (!func.call(null, parameters[index])) {
          return false;
        }
      }

      return true;
    };
  }

  /**
   * Calls the predicate function per parameter and returns true if any pass.
   * @function any
   */
  function any(func) {
    return function () {
      var parameters = arraySlice.call(arguments),
        length = parameters.length,
        index;

      if (length === 1 && isArray(parameters[0])) {
        parameters = parameters[0];
        length = parameters.length;
      }

      for (index = 0; index < length; index += 1) {
        if (func.call(null, parameters[index])) {
          return true;
        }
      }

      return false;
    };
  }

  function applyInterfaces(interfaces) {
    var prop;

    for (prop in isAPI) {
      if (hasOwnProperty.call(isAPI, prop)) {
        if (isFunction(isAPI[prop])) {
          makeInterface(interfaces, prop);
        }
      }
    }
  }

  /**
   * Use this method to include any functions to be used with the API.
   * @function extend
   * @NOTE Use only functions that return a boolean for the API to work properly.
   */
  function extendApiMethods(options) {
    var prop;

    if (!isPlainObject(options)) {
      throw new Error('Expected a plain object as parameter.');
    }

    for (prop in options) {
      if (hasOwnProperty.call(options, prop)) {
        if (isFunction(options[prop]) && arrayIndexOf(interfaces, prop) === -1 && prop !== 'extend') {
          isAPI[prop] = options[prop];
        }
      }
    }

    applyInterfaces(interfaces);
  }

  // API
  /* -------------------------------------------------------------------------- */

  isAPI = {
    'not': not,
    'all': all,
    'any': any,
    'extend': extendApiMethods
  };

  function makeInterface(interfaces, method) {
    var i = 0,
      len = interfaces.length;

    for (i; i < len; i += 1) {
      switch (interfaces[i]) {
        case 'not': isAPI.not[method] = isAPI.not(isAPI[method]); break;
        case 'all': isAPI.all[method] = isAPI.all(isAPI[method]); break;
        case 'any': isAPI.any[method] = isAPI.any(isAPI[method]); break;
        default: break;
      }
    }
  }

  applyInterfaces(interfaces);

  return isAPI;
}));
