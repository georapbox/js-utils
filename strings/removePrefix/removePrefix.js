/**
 * Removes prefix from start of a string.
 * @param {String} str The original string.
 * @param {String} prefix The prefix substring to remove from the original string.
 * @returns {String} The final string.
 */
function removePrefix(str, prefix) {
    return str.indexOf(prefix) === 0 ? str.slice(prefix.length) : str;
}