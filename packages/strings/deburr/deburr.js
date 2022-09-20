'use strict';

/**
 * Deburrs a string by converting latin-1 supplementary letters to
 * basic latin letters and removing combining diacritical marks.
 *
 * @source https://lodash.com/docs#deburr
 *
 * @param {String} subjectString The string to deburr.
 * @throws {TypeError} If `subjectString` is not string.
 * @returns {String} The deburred string.
 * @example
 *
 * const str = 'Maître Corbeau, sur un arbre perché,' +
 *   'Tenait en son bec un fromage.' +
 *   'Maître Renard, par l’odeur alléché,' +
 *   'Lui tint à peu près ce langage.';
 *
 * deburr(str);
 * // => 'Maitre Corbeau, sur un arbre perche,Tenait en son bec un fromage.Maitre Renard, par l’odeur alleche,Lui tint a peu pres ce langage.'
 *
 * deburr('déjà vu');
 * // => 'deja vu'
 */
const deburr = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  // Used to match latin-1 supplementary letters (excluding mathematical operators).
  const reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

  // Used to map latin-1 supplementary letters to basic latin letters.
  const deburredLetters = {
    '\xc0': 'A', '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a', '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C', '\xe7': 'c',
    '\xd0': 'D', '\xf0': 'd',
    '\xc8': 'E', '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e', '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcC': 'I', '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xeC': 'i', '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N', '\xf1': 'n',
    '\xd2': 'O', '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o', '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U', '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u', '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y', '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss'
  };

  // Used to compose unicode capture groups.
  const rsCombo = ['\\u0300-\\u036f\\ufe20-\\ufe23', '\\u20d0-\\u20f0'];

  // Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
  // [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
  const reComboMark = RegExp(rsCombo, 'g');

  return subjectString
    .replace(reLatin1, letter => deburredLetters[letter])
    .replace(reComboMark, '');
};

module.exports = deburr;
