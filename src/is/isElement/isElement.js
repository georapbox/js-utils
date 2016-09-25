/**
 * Checks if 'value' is a DOM element.
 *
 * @category Is
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
  'use strict';

  return !!value && value.nodeType === 1 && value instanceof Element === true;
}
