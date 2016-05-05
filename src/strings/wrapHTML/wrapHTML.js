/**
 * Wraps a string with a HTML tag with attributes if specified.
 * @param {String} subjectString The string to wrap with the HTML tag.
 * @param {String} nodeName The HTML tag name that we want to wrap the string with.
 * @param {Object} [nodeAttributes] Optional. The desired attributes of the HTML element.
 * @return {String} Returns the wrapped string.
 */
function wrapHTML(subjectString, nodeName, nodeAttributes) {
    'use strict';

    var elementName, elementAttributes,
        dasherizedProp, prop, wrapped;

    if (typeof subjectString !== 'string' || typeof nodeName !== 'string') {
        throw new TypeError('Expected a string');
    }

    elementName = nodeName.replace(/[</>]/g, '');
    elementAttributes = '';
    wrapped = '';

    if (typeof nodeAttributes === 'object') {
        for (prop in nodeAttributes) {
            if (nodeAttributes.hasOwnProperty(prop)) {
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
