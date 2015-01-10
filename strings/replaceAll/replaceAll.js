/**
 * Returns a new string with all occurrences of subStr replaced with replaceStr.
 * @param {String} str The initial string.
 * @param {String|Number} subStr The substring to replace.
 * @param {String} replaceStr The substring to replace with.
 * @param {Boolean} [Optional] caseInsensitive If true, the lookup is case insensitive. Default is undefined (falsey).
 * @returns {String} The new string.
 */
function replaceAll(str, subStr, replaceStr, caseInsensitive) {
    // Case insensitive lookup.
    if (caseInsensitive === true) {
        subStr = subStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return str.replace(new RegExp(subStr, 'gi'), replaceStr);
    }

    // Case sensitive lookup.
    return str.split(subStr).join(replaceStr);
}