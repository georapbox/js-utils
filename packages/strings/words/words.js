'use strict';

/**
 * Splits string into an array of its words. Any punctuation is stripped.
 *
 * @param {String} subjectString The string to process.
 * @throws {TypeError} Throws if `subjectString` is not string.
 * @returns {Array} Returns array that contains the string's words.
 * @example
 *
 * words('Hello world! \n This is a message from outer\tspace.');
 * // => ['Hello', 'world', 'This', 'is', 'a', 'message', 'from', 'outer', 'space']
 *
 * words('🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭');
 * // => ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭']
 */
const words = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex/25575009#25575009
  const punctRegExp = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g;
  const nonSpaceRegExp = /\S+/g;

  return subjectString.replace(punctRegExp, '').match(nonSpaceRegExp) || [];
};

module.exports = words;
