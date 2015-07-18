/**
 * Wraps a string with a HTML tag with attributes if specified.
 * @param   {String} string         The string to wrap with the HTML tag.
 * @param   {String} nodeName       The HTML tag name that we want to wrap the string with.
 * @param   {Object} nodeAttributes (Optional) The desired attributes of the HTML element.
 * @returns {String} The final wrapped string.
 */
function wrapHTML(string, nodeName, nodeAttributes) {
    'use strict';

    if (nodeName != null) { // jshint ignore:line
        var elementName = nodeName.replace(/[</>]/g, ''),
            elementAttributes = '',
            dasherizedProp,
            wrapped = '';

        if (typeof nodeAttributes === 'object') {
            for (var prop in nodeAttributes) {
                if (nodeAttributes.hasOwnProperty(prop)) {
                    dasherizedProp = prop.
                        replace(/[_\s]+/g, '-').
                        replace(/([A-Z])/g, '-$1').
                        replace(/-+/g, '-').
                        toLowerCase();

                    elementAttributes += ' ' + dasherizedProp + '="' + nodeAttributes[prop] + '"';
                }
            }
        }

        wrapped = wrapped.concat('<', elementName, elementAttributes, '>', string, '</', elementName, '>');
        return wrapped;
    }

    return string;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = wrapHTML;
}
