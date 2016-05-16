/**
 * Removes whitespace from the right end of a string.
 *
 * @category String
 * @param {String} subjectString The string to right trim.
 * @return {String} The result string.
 * @example
 *
 *
 * trimLeft('Lorem ipsum dolor si amet.    ');
 * // -> 'Lorem ipsum dolor si amet.'
 */
function trimRight(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.replace(/\s+$/, '');
}
