/**
 * Converts string into string delimited by underscores.
 * @param {String} subjectString The string to convert.
 * @return {String} Returns the result string.
 */
function snakeCase(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString
        .replace(/[_]+/g, ' ')                             // Replace any `_` characters with a space.
        .replace(/[^\w\s]/g, ' ')                          // Replace any non alphanumeric characters with a space.
        .replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') // Remove leading and trailing spaces.
        .replace(/([a-z\d])([A-Z]+)/g, '$1_$2')            // Uppercase characters preceeded by lowercase characters.
        .replace(/([A-Z\d]+)([A-Z][a-z])/g, '$1_$2')       // Uppercase characters preceeded by lowercase characters and followed by lowercase characters.
        .replace(/[-\s]+/g, '_')                           // Replace spaces and `-` characters with `_` character.
        .toLowerCase();                                    // Lower case string.
}
