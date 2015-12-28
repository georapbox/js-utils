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

    var is; // Holds the API methods.

    // Define some constants.
    var ARRAY = '[object Array]',
        STRING = '[object String]',
        FUNCTION = '[object Function]',
        NUMBER = '[object Number]';

    var toString = Object.prototype.toString,
        arraySlice = Array.prototype.slice,
        hasOwnProperty = Object.prototype.hasOwnProperty;

    /**
     * Checks if 'value' is a function.
     * @param {*} value The value to check.
     * @return {boolean} Returns true if 'value' is a function, else returns false.
     */
    function isFunction(value) {
        return typeof value === 'function' && toString.call(value) === FUNCTION;
    }

    /**
     * Checks if 'value' is array
     * @param {*} value The 'value' to check if is array
     * @return {boolean} Returns true if array, else false
     */
    function isArray(value) {
        return value &&
            typeof value === 'object' &&
            typeof value.length === 'number' &&
            toString.call(value) === ARRAY ||
            false;
    }

    /**
     * Checks if 'value' is string.
     * @param {*} 'value' to check if is string.
     * @return {boolean} Returns true if string, else false.
     */
    function isString(value) {
        return typeof value === 'string' && toString.call(value) === STRING;
    }

    /**
     * Checks if 'value' is the language type of "Object".
     * @param {*} value The value to check.
     * @return {boolean} Returns true if "value" is an object, else false.
     */
    function isObject(value) {
        var type = typeof value;
        return !!value && (type === 'function' || type === 'object' || false);
    }

    /**
     * Checks if "value" is an object created by the "Object" constructor.
     * @param {*} value the value to check.
     * @return {boolean} Returns true if "value" is an object created by the "Object" constructor, else false.
     */
    function isPlainObject(value) {
        return !!value && typeof value === 'object' && value.constructor === Object;
    }

    /**
     * Checks if 'value' is a number.
     * Note: NaN is considered a number.
     * @param {*} value The value to check.
     * @return {boolean} Returns true if 'value' is a number, else false.
     */
    function isNumber(value) {
        return value && toString.call(value) === NUMBER && typeof value === 'number' || false;
    }

    /**
     * Checks if 'value' is a boolean value.
     * @param {*} value The value to check.
     * @return {boolean} Returns true if the 'value' is a boolean value, else false.
     */
    function isBoolean(value) {
        return (value === true || value === false || value && typeof obj === 'object') &&
            (Object.prototype.toString.call(value) === '[object Boolean]') ||
            false;
    }

    /**
     * Checks if 'value' is null.
     * @param {*} value The value to check.
     * @return {boolean} Returns true if 'value' is null, else false.
     */
    function isNull(value) {
        return value === null;
    }

    /**
     * Checks if 'value' is null or undefined.
     * @param {*} value The value to check.
     * @return {boolean} Returns true if 'value' is null or undefined, else false.
     */
    function isNullOrUndefined(value) {
        // NOTE: Using non-strict equality check here because we're checking if value is null OR undefined.
        return value == null; // jshint ignore: line
    }

    // INTERFACE FUNCTIONS
    /* -------------------------------------------------------------------------- */

    /**
     * Helper function which reverses the sense of predicate result.
     * @param {function} func
     * @return {function}
     */
    function not(func) {
        return function () {
            return !func.apply(null, arraySlice.call(arguments));
        };
    }

    /**
     * Helper function which call predicate function per parameter and return true if all pass.
     * @param {function} func
     * @return {function}
     */
    function all(func) {
        return function () {
            var parameters = arraySlice.call(arguments),
                length = parameters.length;

            if (length === 1 && isArray(parameters[0])) {
                parameters = parameters[0];
                length = parameters.length;
            }

            for (var i = 0; i < length; i += 1) {
                if (!func.call(null, parameters[i])) {
                    return false;
                }
            }

            return true;
        };
    }

    /**
     * Helper function which call predicate function per parameter and return true if any pass.
     * @param {function} func
     * @return {function}
     */
    function any(func) {
        return function () {
            var parameters = arraySlice.call(arguments),
                length = parameters.length;

            if (length === 1 && isArray(parameters[0])) {
                parameters = parameters[0];
                length = parameters.length;
            }

            for (var i = 0; i < length; i += 1) {
                if (func.call(null, parameters[i])) {
                    return true;
                }
            }

            return false;
        };
    }

    // API
    /* -------------------------------------------------------------------------- */

    is = {
        'not': not,
        'all': all,
        'any': any,
        'array': isArray,
        'boolean': isBoolean,
        'function': isFunction,
        'null': isNull,
        'null_undef': isNullOrUndefined,
        'number': isNumber,
        'object': isObject,
        'plain_object': isPlainObject,
        'string': isString
    };

    // Set 'not', 'all' and 'any' interfaces to methods based on their api property.
    (function () {
        var prop;

        function makeInterface(interfaces, method) {
            var i = 0,
                len = interfaces.length;

            for (i; i < len; i += 1) {
                switch (interfaces[i]) {
                    case 'not': is.not[method] = is.not(is[method]); break;
                    case 'all': is.all[method] = is.all(is[method]); break;
                    case 'any': is.any[method] = is.any(is[method]); break;
                }
            }
        }

        for (prop in is) {
            if (hasOwnProperty.call(is, prop)) {
                if (isFunction(is[prop])) {
                    makeInterface(['not', 'all', 'any'], prop);
                }
            }
        }
    }());

    return is;
}));
