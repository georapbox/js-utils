/**
 * Returns a substring denoted by n (positive or negative) characters.
 * If n >= 0, returns a substring from the left end of the string.
 * If n < 0, returns a substring from the right end of the string.
 * If n is not of type number, throws exception.
 * @param {String} str The initial string.
 * @param {Number} n   The number of characters of the new string.
 * @returns {String}   The final string.
 */
function subStr(str, n) {
    if (typeof n === 'number') {
        return n >= 0 ? str.substr(0, n) : str.substr(str.length + n, -n);
    }
    throw new Error('Wrong type of argument passed. Expected a number, instead found a ' +  typeof n + '.');
}