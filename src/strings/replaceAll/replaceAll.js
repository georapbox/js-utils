/**
 * Creates a new string with all occurrences of `subString` replaced with `replaceString`.
 * @param {String} subjectString The initial string.
 * @param {String} subString The substring to replace.
 * @param {String} replaceString The substring to replace with.
 * @param {Boolean} [caseInsensitive] Optional. If true, the lookup is case insensitive.
 * @return {String} Returns the result string.
 */
function replaceAll(subjectString, subString, replaceString, caseInsensitive) {
    'use strict';

    var isString = function (val) {
        return typeof val === 'string';
    };

    if (!isString(subjectString) || !isString(subString) || !isString(replaceString)) {
        throw new TypeError('Expected a string');
    }

    // Case insensitive lookup.
    if (caseInsensitive === true) {
        subString = subString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return subjectString.replace(new RegExp(subString, 'gi'), replaceString);
    }

    // Case sensitive lookup.
    return subjectString.split(subString).join(replaceString);
}
