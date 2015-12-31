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
        return !!value && typeof value === 'object' && value.constructor === Object;
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

    function not(func) {
        return function () {
            return !func.apply(null, arraySlice.call(arguments));
        };
    }

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

    function extendApiMethods(options) {
        if (!isPlainObject(options)) {
            throw new Error('Expected a plain object as parameter.');
        }
        var prop;
        for (prop in options) {
            if (hasOwnProperty.call(options, prop)) {
                if (
                    isFunction(options[prop]) &&
                    arrayIndexOf(interfaces, prop) === -1 &&
                    prop !== 'extend'
                ) {
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
            }
        }
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

    applyInterfaces(interfaces);

    return isAPI;
}));
