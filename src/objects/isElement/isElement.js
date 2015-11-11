/**
 * Checks if 'value' is a DOM element.
 * @param   {*}       value The value to check.
 * @returns {Boolean} Returns true if 'value' is a DOM element, else false.
 */
function isElement(value) {
    'use strict';
    return value && value.nodeType === 1 && value instanceof Element === true || false;
}
