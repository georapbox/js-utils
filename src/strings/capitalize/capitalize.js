/**
 * Capitalizes the first character of a string.
 *
 * @category String
 * @param {String} subjectString The string to capitalize its first character.
 * @param {Boolean} [lowerCaseRest=false] If true will lowercase the rest of the string.
 * @returns {String} A new capitalized string.
 * @example
 *
 * capitalize('hello');
 * // -> 'Hello'
 *
 * capitalize('hElLo');
 * // -< 'HElLo'
 *
 * capitalize('hElLo', true);
 * // -> 'Hello'
 */
function capitalize(subjectString, lowerCaseRest) {
    'use strict';

    var firstChar, restStr;

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    firstChar = subjectString.substr(0, 1).toUpperCase();
    restStr = lowerCaseRest === true ?
        subjectString.substring(1).toLocaleLowerCase() :
        subjectString.substring(1);

    return firstChar + restStr;
}
