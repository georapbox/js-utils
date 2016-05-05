/**
 * Converts a camel cased string into a string delimited by dashes.
 * @param {String} subjectString The string to dasherize.
 * @return {String} The converted string.
 */
function dasherize(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString
        .replace(/[_\s]+/g, '-')
        .replace(/([A-Z])/g, '-$1')
        .replace(/-+/g, '-')
        .toLowerCase();
}
