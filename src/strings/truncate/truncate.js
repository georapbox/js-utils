/**
 * Truncates a string based on character count.
 * @param   {String} string            The string to truncate.
 * @param   {Number} characterCount    The number of characters the truncated string contains. If ommitted or falsey, the initial string is returned.
 * @param   {String} [delimiter="..."] The delimiter to add at the end of the truncated string. Optional. Default value is "...".
 * @returns {String} The truncated string.
 */
function truncate(string, characterCount, delimiter) {
    'use strict';

    if (characterCount > string.length || !characterCount) {
        return string;
    }

    var regex = new RegExp('^.{0,' + characterCount + '}[\S]*', 'g'),
        truncated = string.match(regex);

    delimiter = delimiter || '...';
    truncated = truncated[0].replace(/\s$/, '');
    truncated = truncated + delimiter;
    return truncated;
}

// Required for building process.
// You can ommit if just need the function.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = truncate;
}
