/**
 * Counts the occurrences of substring in a string.
 * @param {String} str The string.
 * @param {String} subStr The string to search for.
 * @param {Boolean} [Optional] caseInsensitive If true, the lookup is case insensitive.
 * @returns {Number} Number of occurences.
 */
function count(str, subStr, caseInsensitive) {
    'use strict';

    str += '';
    subStr += '';

    if (subStr.length <= 0) {
        return str.length + 1;
    }

    // Case insensitive lookup.
    if (caseInsensitive === true) {
        subStr = subStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return (str.match(new RegExp(subStr, 'gi')) || []).length;
    }

    // Case sensitive lookup.
    var n = 0,
        pos = 0,
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

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = count;
}
