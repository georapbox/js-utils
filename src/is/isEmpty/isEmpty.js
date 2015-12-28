/**
 * Checks if 'value' is empty.
 * Arrays, strings, or arguments objects with a length of 0 and
 * objects with no own enumerable properties are considered "empty".
 * @param   {Object|String|Array}  value the object ot check if is empty.
 * @returns {Boolean} Returns true if empty, else false.
 */
function isEmpty(value) {
    'use strict';

    // null and undefined are "empty".
    if (value == null) { // jshint ignore:line
        return true;
    }

    var isArray = Array.isArray ? Array.isArray(value) : value instanceof Array || Object.prototype.toString.call(value) === '[object Array]',
        isString = Object.prototype.toString.call(value) === '[object String]';

    // If is array or string, empty means length is 0.
    if (isArray || isString) {
        return value.length === 0;
    }

    // If it doesn't have own properties (enumerable), is empty.
    for (var prop in value) {
        if (value.hasOwnProperty(prop)) {
            return false;
        }
    }

    return true;
}
