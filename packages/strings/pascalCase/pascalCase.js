'use strict';

/**
 * Converts a string to [pascal case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * Combines words by capitalizing all words (even the first word) and removing spaces.
 *
 * @param {String} subjectString The string to convert.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @returns {String} Returns the pascal cased string.
 * @example
 *
 * pascalCase('the quick brown fox jumps over the lazy dog');
 * // => 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('The Quick Brown Fox Jumps Over The Lazy Dog');
 * // => 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
 * // => 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
 * // => 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('TheQuickBrownFoxJumpsOverTheLazyDog');
 * // => 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('thequickbrownfoxjumpsoverthelazydog');
 * // => 'Thequickbrownfoxjumpsoverthelazydog'
 *
 * pascalCase('theQUICKBrownFoxJumpsOverTheLazyDog');
 * // => 'TheQUICKBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
 * // => 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ');
 * // => 'TheQuickBrownFoxJumpsOverTheLazyDog'
 */
const pascalCase = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex/25575009#25575009
  const wordSeparatorRegexp = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/;
  const words = subjectString.split(wordSeparatorRegexp);

  return words.reduce((accum, word) => {
    if (word !== '') {
      accum += word.substring(0, 1).toUpperCase() + word.substring(1);
    }

    return accum;
  }, '');
};

module.exports = pascalCase;
