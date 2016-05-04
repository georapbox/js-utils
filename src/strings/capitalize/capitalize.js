/**
 * Capitalizes the first character of a string.
 * @param {String} str The string to capitalize its first character.
 * @param {Boolean} [lowerCaseRest] Optional. If true will lowercase the rest of the string.
 * @returns {String} A new capitalized string.
 */
function capitalize(str, lowerCaseRest) {
    'use strict';

    var firstChar, restStr;

    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }

    firstChar = str.substr(0, 1).toUpperCase();
    restStr = lowerCaseRest === true ? str.substring(1).toLocaleLowerCase() : str.substring(1);

    return firstChar + restStr;
}
