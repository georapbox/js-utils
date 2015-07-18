/**
 * Converts a camel cased string into a string delimited by dashes.
 * @param   {String} string The string to dasherize.
 * @returns {String} The converted string.
 */
function dasherize(string) {
    'use strict';

    return string && string.
        replace(/[_\s]+/g, '-').
        replace(/([A-Z])/g, '-$1').
        replace(/-+/g, '-').
        toLowerCase();
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dasherize;
}
