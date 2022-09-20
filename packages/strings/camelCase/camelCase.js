'use strict';

/**
 * Converts a string to [camel case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * Combines words by capitalizing all words following the first word and removing spaces.
 *
 * @param {String} subjectString The string to convert.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @returns {String} Returns the camel cased string.
 * @example
 *
 * camelCase('the quick brown fox jumps over the lazy dog');
 * // => 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
 * // => 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
 * // => 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('thequickbrownfoxjumpsoverthelazydog');
 * // => 'thequickbrownfoxjumpsoverthelazydog'
 *
 * camelCase('theQuickBrownFoxJumpsOverTheLazyDog');
 * // => 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('TheQuickBrownFoxJumpsOverTheLazyDog');
 * // => 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('The Quick Brown Fox Jumps Over The Lazy Dog');
 * // => 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('theQUICKBrownFoxJumpsOverTheLazyDog');
 * // => 'theQUICKBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
 * // => 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase(' () @#$ @# @the quick brown fox jumps over the lazy dog  #!#$% <> ');
 * // => 'theQuickBrownFoxJumpsOverTheLazyDog'
 */
const camelCase = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex/25575009#25575009
  const wordSeparatorRegexp = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/;
  const words = subjectString.split(wordSeparatorRegexp);

  return words.filter(Boolean).reduce((accum, word, index) => {
    const firstChar = word.substring(0, 1);
    const restChars = word.substring(1);
    const tempStr = index === 0 ? firstChar.toLowerCase() + restChars : firstChar.toUpperCase() + restChars;
    return accum + tempStr;
  }, '');
};

module.exports = camelCase;
