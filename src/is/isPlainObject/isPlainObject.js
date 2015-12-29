/**
 * Checks if "value" is an object created by the "Object" constructor.
 * @param {*} value the value to check.
 * @returns {boolean} Returns true if "value" is an object created by the "Object" constructor, else false.
 */
function isPlainObject(value) {
    'use strict';
    return typeof value === 'object' && value.constructor === Object;
}
