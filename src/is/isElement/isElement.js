/**
 * Checks if a value is a DOM element.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is a DOM element; otherwise `false`.
 * @example
 *
 * isElement(document.body);
 * // => true
 *
 * isElement(document.createElement('div'));
 * // => true
 *
 * isElement(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
 * // => true
 *
 * isElement(document);
 * // => false
 *
 * isElement(document.createTextNode('Hello'));
 * // => false
 *
 * isElement(null);
 * // => false
 */
export const isElement = (value) => {
  return !!value && value.nodeType === 1 && value instanceof Element === true;
};
