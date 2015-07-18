/**
 * Checks if 'value' is string.
 * @param {*} 'value' to check if is string.
 * @returns {boolean} Returns true if string, else false.
 */
function isString(value) {
    'use strict';
    return Object.prototype.toString.call(value) === '[object String]';
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = isString;
}
