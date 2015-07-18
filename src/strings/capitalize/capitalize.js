/**
 * Capitalizes the first character of a string.
 * @param {String} str The string to capitalize its first character.
 * @param {Boolean} [Optional] lowerCaseRest If true will lowercase the rest of the string. Default is undefined (falsey).
 * @returns {String} A new capitalized string.
 */
function capitalize(str, lowerCaseRest) {
    'use strict';

    var firstChar = str.substr(0, 1).toUpperCase(),
        restStr = lowerCaseRest === true ? str.substring(1).toLocaleLowerCase() : str.substring(1);

    return firstChar + restStr;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = capitalize;
}
