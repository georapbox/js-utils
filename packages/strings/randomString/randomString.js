'use strict';

/**
 * Generates a random string of specific `length` allowing a set of characters specified by `chars`.
 *
 * @param {Number} length The number of characters of the generated string.
 * @param {String} [chars='#aA!'] Type of characters to be allowed in the generated string.
 * Allow numeric (`#`) characters, lower-case (`a`) characters, upper-case (`A`) characters, special (`!`) characters.
 * @throws {TypeError} Throws if first argument is not number.
 * @throws {TypeError} Throws if second argument is not string but not undefined.
 * @returns {String} The random generated string.
 * @example
 *
 * randomString(8, '#aA!');
 * // -> '@+[cd{tX'
 *
 * randomString(8, '#aA');
 * // -> 'jeEmsT8z'
 *
 * randomString(8, '#a');
 * // -> 'toae8z3z'
 *
 * randomString(8, '#');
 * // -> '63263257'
 *
 * randomString(16);
 * // -> 'g*EY;#5PlO2V!!'
 *
 * randomString(16, 'aA');
 * // -> 'YGOSgnoUIHaUvEcp'
 */
function randomString(length, chars) {
  if (typeof length !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  if (typeof chars !== 'string' && typeof chars !== 'undefined') {
    throw new TypeError('Expected a string for second argument');
  }

  var mask = '';
  var result = '';
  var i = length;

  chars = chars || '#aA!';

  if (chars.indexOf('a') > -1) {
    mask += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (chars.indexOf('A') > -1) {
    mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (chars.indexOf('#') > -1) {
    mask += '0123456789';
  }

  if (chars.indexOf('!') > -1) {
    mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
  }

  for (i; i > 0; --i) {
    result += mask[Math.floor(Math.random() * mask.length)];
  }

  return result;
}

module.exports = randomString;
