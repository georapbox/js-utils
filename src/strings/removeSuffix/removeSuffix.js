/**
 * Removes suffix from start of a string.
 * @param {String} subjectString The original string.
 * @param {String} [suffix] Optional. The suffix substring to remove from the original string.
 * @returns {String} Returns the result string.
 */
function removeSuffix(subjectString, suffix) {
    'use strict';

    var strLen, suffixLen;

    if (typeof subjectString !== 'string' || typeof suffix !== 'string' && suffix != null) {
        throw new TypeError('Expected a string');
    }

    strLen = subjectString.length;
    suffixLen = suffix ? suffix.length : 0;

    return subjectString.indexOf(suffix, strLen - suffixLen) !== -1 ?
        subjectString.slice(0, strLen - suffixLen) : subjectString;
}
