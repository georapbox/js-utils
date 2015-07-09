/**
 * Converts a string into camel casing, removing "underscores", "dashes" or spaces (optional).
 * @param {String} str The string to camelize.
 * @param {Boolean} [Optional] camelizeSpaces Defines if spaces are also camelized. Default is undefined.
 */
function camelize(str, camelizeSpaces) {
    'use strict';

    var regex = camelizeSpaces === true ? /(\-|_|\s)+(.)?/g : /(\-|_)+(.)?/g;

    return str.replace(regex , function (match, seperator, character, index) {
        return character ? character.toUpperCase() : '';
    });
}
