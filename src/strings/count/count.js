/**
 * Counts the occurrences of substring in a string.
 * @param {String} subjectString The string.
 * @param {String} subString The string to search for.
 * @param {Boolean} [caseInsensitive] Optional. If true, the lookup is case insensitive.
 * @return {Number} Returns the number of occurrences.
 */
function count(subjectString, subString, caseInsensitive) {
    'use strict';

    var n, pos, step;

    if (typeof subjectString !== 'string' || typeof subString !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (subString.length <= 0) {
        return subjectString.length + 1;
    }

    // Case insensitive lookup.
    if (caseInsensitive === true) {
        subString = subString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return (subjectString.match(new RegExp(subString, 'gi')) || []).length;
    }

    // Case sensitive lookup.
    n = 0;
    pos = 0;
    step = subString.length;

    while (true) {
        pos = subjectString.indexOf(subString, pos);

        if (pos >= 0) {
            n += 1;
            pos += step;
        } else {
            break;
        }
    }

    return n;
}
