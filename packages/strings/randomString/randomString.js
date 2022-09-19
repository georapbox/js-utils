'use strict';

/**
 * Generates a pseudo-random string of specific `len` allowing a set of characters specified by `chars`.
 *
 * @param {Number} len The number of characters of the generated string.
 * @param {String} [chars='#aA!'] Type of characters to be allowed in the generated string.
 * Allow numeric (`#`) characters, lower-case (`a`) characters, upper-case (`A`) characters, special (`!`) characters.
 * @throws {TypeError} Throws if first argument is not number.
 * @throws {TypeError} Throws if second argument is not a string that contains the allowedcharacters but not undefined.
 * @returns {String} The random generated string.
 * @example
 *
 * randomString(8, '#aA!');
 * // => '@+[cd{tX'
 *
 * randomString(8, '#aA');
 * // => 'jeEmsT8z'
 *
 * randomString(8, '#a');
 * // => 'toae8z3z'
 *
 * randomString(8, '#');
 * // => '63263257'
 *
 * randomString(16);
 * // => 'g*EY;#5PlO2V!!'
 *
 * randomString(16, 'aA');
 * // => 'YGOSgnoUIHaUvEcp'
 */
const randomString = (len, chars = '#aA!') => {
  const charsError = 'Expected a string for second argument, that contains one or more of the following characters: "#", "a", "A", "!"';

  if (typeof len !== 'number') {
    throw new TypeError('Expected a number for first argument');
  }

  if (typeof chars !== 'string' || chars === '') {
    throw new TypeError(charsError);
  }

  let mask = '';
  let result = '';

  const mapCharSampleToAllowedChars = {
    'a': 'abcdefghijklmnopqrstuvwxyz',
    'A': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '#': '0123456789',
    '!': '!#$%&()*+,\\-./:;<=>?@[]^_{|}~'
  };

  for (const key in mapCharSampleToAllowedChars) {
    if (
      Object.prototype.hasOwnProperty.call(mapCharSampleToAllowedChars, key)
      && chars.indexOf(key) > -1
    ) {
      mask += mapCharSampleToAllowedChars[key];
    }
  }

  if (!mask.length) {
    throw new TypeError(charsError);
  }

  for (let i = 0; i < len; i += 1) {
    result += mask[Math.floor(Math.random() * mask.length)];
  }

  return result;
};

module.exports = randomString;
