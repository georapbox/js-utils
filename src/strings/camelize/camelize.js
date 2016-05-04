/**
 * Converts a string into camel casing, removing "underscores", "dashes" or spaces (optional).
 * @param {String} str The string to camelize.
 * @param {Boolean} [camelizeSpaces] Defines if spaces are also camelized.
 */
function camelize(str, camelizeSpaces) {
    'use strict';

    var regex;

    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }

    regex = camelizeSpaces === true ? /(\-|_|\s)+(.)?/g : /(\-|_)+(.)?/g;

    return str.replace(regex, function (match, seperator, character) {
        return character ? character.toUpperCase() : '';
    });
}
