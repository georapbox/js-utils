/**
 * Returns a substring denoted by n (positive or negative) characters.
 * If n >= 0, returns a substring from the left end of the string.
 * If n < 0, returns a substring from the right end of the string.
 * If n is not of type number, returns the whole string intact.
 * @param {String} subjectString The initial string.
 * @param {Number} n The number of characters of the new string.
 * @returns {String} Returns the result string.
 */
function subStr(subjectString, n) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (typeof n === 'number') {
        return n >= 0 ?
            subjectString.substr(0, n) :
            subjectString.substr(subjectString.length + n, -n);
    }

    return subjectString;
}
