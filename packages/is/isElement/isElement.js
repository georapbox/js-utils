'use strict';

/**
 * Checks if a value is a DOM element.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if 'value' is a DOM element, else false.
 * @example
 *
 * isElement('Lorem ipusm dolr sit amet.');
 * // => false
 *
 * isElement(document.body);
 * // => true
 *
 * isElement(document.getElementsByTagName('head')[0])
 * // => true
 */
const isElement = value => {
  return !!value && value.nodeType === 1 && value instanceof Element === true;
};

module.exports = isElement;
