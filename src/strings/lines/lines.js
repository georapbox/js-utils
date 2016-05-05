/**
 * Returns an array with the lines of a a string.
 * @param {String} subjectString The string to process.
 * @return {Array} An array containing the lines of the string.
 */
function lines(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString.replace(/\r\n/g, '\n').split('\n');
}
