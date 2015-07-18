/**
 * Checks if "value" is an object created by the "Object" constructor.
 * @param {*} value the value to check.
 * @returns {boolean} Returns true if "value" is an object created by the "Object" constructor, else false.
 */
function isPlainObject(value) {
    'use strict';
    return !!value && typeof value === 'object' && value.constructor === Object;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = isPlainObject;
}
