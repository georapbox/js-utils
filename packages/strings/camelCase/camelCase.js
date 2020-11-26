'use strict';

/**
 * Converts a string to [camel case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * Combines words by capitalizing all words following the first word and removing spaces.
 *
 * @param {String} subjectString The string to convert.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @return {String} Returns the camel cased string.
 * @example
 *
 * camelCase('the quick brown fox jumps over the lazy dog');
 * // -> 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('the-quick-brown-fox-jumps-over-the-lazy-dog');
 * // -> 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('the_quick_brown_fox_jumps_over_the_lazy_dog');
 * // -> 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('thequickbrownfoxjumpsoverthelazydog');
 * // -> 'thequickbrownfoxjumpsoverthelazydog'
 *
 * camelCase('theQuickBrownFoxJumpsOverTheLazyDog');
 * // -> 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('TheQuickBrownFoxJumpsOverTheLazyDog');
 * // -> 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('The Quick Brown Fox Jumps Over The Lazy Dog');
 * // -> 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('theQUICKBrownFoxJumpsOverTheLazyDog');
 * // -> 'theQUICKBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog');
 * // -> 'theQuickBrownFoxJumpsOverTheLazyDog'
 *
 * camelCase(' () @#$ @# @the quick brown fox jumps over the lazy dog  #!#$% <> ');
 * // -> 'theQuickBrownFoxJumpsOverTheLazyDog'
 */
function camelCase(subjectString) {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  var wordSeparatorRegexp = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/; // http://stackoverflow.com/a/25575009
  var words = subjectString.split(wordSeparatorRegexp);

  return words.filter(Boolean).reduce(function (accum, word, index) {
    var firstChar = word.substr(0, 1);
    var restChars = word.substr(1);
    var tempStr = index === 0 ? firstChar.toLowerCase() + restChars : firstChar.toUpperCase() + restChars;

    return accum + tempStr;
  }, '');
}

module.exports = camelCase;
