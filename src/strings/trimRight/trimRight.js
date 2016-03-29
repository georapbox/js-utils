/**
 * Removes whitespace from the right end of a string.
 * @param {String} subjectString The string to right trim.
 */
function trimRight(subjectString) {
    'use strict';
    return subjectString.replace(/\s+$/, '');
}
