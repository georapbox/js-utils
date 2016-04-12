/**
 * Checks if 'value' matches a hexadecimal color regular expression.
 * @param {*} value The value to check.
 * @return {Boolean} true|false Returns true if 'value' is a hexadecimal color regexp, else false.
 */
function isHexColor(value) {
    'use strict';
    return  /^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
}
