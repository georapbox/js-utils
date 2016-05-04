/**
 * Converts all adjacent whitespace characters to a single space.
 * @param {String} str the string to process.
 * @return {String} The final string with all adjacent whitespace converted to single space.
 */
function collapseWhitespace(str) {
    'use strict';

    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }

    return str.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
}
