/**
 * Removes whitespace from the left end of a string.
 * @param {String} subjectString The string to left trim.
 */
function trimLeft(subjectString) {
    'use strict';
    return subjectString.replace(/^\s+/, '');
}
