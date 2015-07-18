/**
 * Checks if 'value' is a function.
 * @param   {*}       value The value to check.
 * @returns {Boolean} Returns true if 'value' is a function, else returns false.
 */
function isFunction(value) {
    'use strict';
    return typeof value === 'function' && Object.prototype.toString.call(value) === '[object Function]';
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = isFunction;
}
