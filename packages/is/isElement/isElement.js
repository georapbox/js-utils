'use strict';

/**
 * Checks if 'value' is a DOM element.
 *
 * @param {*} value The value to check.
 * @return {Boolean} True if 'value' is a DOM element, else false.
 * @example
 *
 * isElement('Lorem ipusm dolr sit amet.');
 * // -> false
 *
 * isElement(document.body);
 * // -> true
 *
 * isElement(document.getElementsByTagName('head')[0])
 * // -> true
 */
function isElement(value) {
  return !!value && value.nodeType === 1 && value instanceof Element === true;
}

module.exports = isElement;
