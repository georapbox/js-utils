/**
 * Counts the occurrences of substring in a string.
 * @param {String} str The string.
 * @param {String} subStr The string to search for.
 * @param {Boolean} [caseInsensitive] Optional. If true, the lookup is case insensitive.
 * @return {Number} Returns the number of occurrences.
 */
function count(str, subStr, caseInsensitive) {
    'use strict';

    var n, pos, step;

    if (typeof str !== 'string' || typeof subStr !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (subStr.length <= 0) {
        return str.length + 1;
    }

    // Case insensitive lookup.
    if (caseInsensitive === true) {
        subStr = subStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return (str.match(new RegExp(subStr, 'gi')) || []).length;
    }

    // Case sensitive lookup.
    n = 0;
    pos = 0;
    step = subStr.length;

    while (true) {
        pos = str.indexOf(subStr, pos);

        if (pos >= 0) {
            n += 1;
            pos += step;
        } else {
            break;
        }
    }

    return n;
}
