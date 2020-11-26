'use strict';

/**
 * Converts a string to [pascal case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * Combines words by capitalizing all words (even the first word) and removing spaces.
 *
 * @param {String} subjectString The string to convert.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @return {String} Returns the pascal cased string.
 * @example
 *
 * pascalCase('the quick brown fox jumps over the lazy dog');
 * // -> 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('The Quick Brown Fox Jumps Over The Lazy Dog');
 * // -> 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
 * // -> 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
 * // -> 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('TheQuickBrownFoxJumpsOverTheLazyDog');
 * // -> 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('thequickbrownfoxjumpsoverthelazydog');
 * // -> 'Thequickbrownfoxjumpsoverthelazydog'
 *
 * pascalCase('theQUICKBrownFoxJumpsOverTheLazyDog');
 * // -> 'TheQUICKBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
 * // -> 'TheQuickBrownFoxJumpsOverTheLazyDog'
 *
 * pascalCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ');
 * // -> 'TheQuickBrownFoxJumpsOverTheLazyDog'
 */
function pascalCase(subjectString) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  var wordSeparatorRegexp = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/; // http://stackoverflow.com/a/25575009
  var words = subjectString.split(wordSeparatorRegexp);

  return words.reduce(function (accum, word) {
    if (word !== '') {
      accum += word.substr(0, 1).toUpperCase() + word.substr(1);
    }

    return accum;
  }, '');
}

module.exports = pascalCase;
