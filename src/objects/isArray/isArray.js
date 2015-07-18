/**
 * Checks if 'value' is array.
 * @param   {*}  value The 'value' to check if is array.
 * @returns {Boolean} Returns true if array, else false.
 */
function isArray(value) {
    'use strict';

    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        Object.prototype.toString.call(value) === '[object Array]' ||
        false;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = isArray;
}
