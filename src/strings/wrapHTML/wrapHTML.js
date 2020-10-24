'use strict';

/**
 * Wraps a string with a HTML tag with attributes if specified.
 *
 * @category String
 * @param {String} subjectString The string to wrap with the HTML tag.
 * @param {String} nodeName The HTML tag name that we want to wrap the string with.
 * @param {Object} [nodeAttributes] The desired attributes of the HTML element.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {TypeError} If `nodeName` is not string.
 * @return {String} The wrapped string.
 * @example
 *
 * var str = 'Lorem ipsum dolor sit amet.';
 *
 * var p = wrapHTML(str, 'p');
 * // -> '<p>Lorem ipsum dolor sit amet.</p>'
 *
 * var div = wrapHTML(p, 'div', {
 *   class: 'myClass',
 *   id: 'myId',
 *   dataType: 'myType' // Note that camelized keys are dasherized. Use string format to avoid this action.
 * });
 * // -> '<div class="myClass" id="myId" data-type="myType"><p>Lorem ipsum dolor sit amet.</p></div>'
 */
function wrapHTML(subjectString, nodeName, nodeAttributes) {
  var elementName, elementAttributes, dasherizedProp, prop, wrapped;

  if (typeof subjectString !== 'string' || typeof nodeName !== 'string') {
    throw new TypeError('Expected a string');
  }

  elementName = nodeName.replace(/[</>]/g, '');
  elementAttributes = '';
  wrapped = '';

  if (typeof nodeAttributes === 'object') {
    for (prop in nodeAttributes) {
      if (Object.prototype.hasOwnProperty.call(nodeAttributes, prop)) {
        dasherizedProp = prop
          .replace(/[_\s]+/g, '-')
          .replace(/([A-Z])/g, '-$1')
          .replace(/-+/g, '-')
          .toLowerCase();

        elementAttributes += ' ' + dasherizedProp + '="' + nodeAttributes[prop] + '"';
      }
    }
  }

  wrapped = wrapped.concat(
    '<', elementName, elementAttributes, '>', subjectString, '</', elementName, '>'
  );

  return wrapped;
}

module.exports = wrapHTML;