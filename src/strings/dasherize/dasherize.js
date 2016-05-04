/**
 * Converts a camel cased string into a string delimited by dashes.
 * @param {String} str The string to dasherize.
 * @return {String} The converted string.
 */
function dasherize(str) {
    'use strict';

    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }

    return str
        .replace(/[_\s]+/g, '-')
        .replace(/([A-Z])/g, '-$1')
        .replace(/-+/g, '-')
        .toLowerCase();
}
