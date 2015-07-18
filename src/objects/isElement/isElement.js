/**
 * Checks if 'value' is a DOM element.
 * @param   {*}       value The value to check.
 * @returns {Boolean} Returns true if 'value' is a DOM element, else false.
 */
function isElement(value) {
    'use strict';
    return value && value.nodeType === 1 || false;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = isElement;
}
