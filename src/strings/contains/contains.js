/**
 * Returns true if subStr is included in str.
 * @param {String} str The initial string.
 * @param {String} subStr The string we want to check if included in initial string.
 * @param {Boolean} [Optional] caseInsensitive If true, the lookup is case insensitive. Default is undefined (falsey).
 * @returns {Boolean}
 */
function contains(str, subStr, caseInsensitive) {
    'use strict';

    // Case insensitive lookup.
    if (caseInsensitive === true) {
        subStr = subStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return str.search(new RegExp(subStr, 'i')) > -1 ? true : false;
    }

    // Case sensitive lookup.
    return str.indexOf(subStr) > -1;
}
