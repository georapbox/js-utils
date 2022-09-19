'use strict';

/**
 * Creates an array with the lines of a a string.
 *
 * @param {String} subjectString The string to process.
 * @throws {TypeError} If `subjectString` is not string.
 * @returns {Array} An array or strings containing the lines of the string.
 * @example
 *
 * const str = 'You can\'t make\nan omelet without\r\nbreaking a few eggs.';
 * const str2 = `You can\'t make
 *   an omelet without
 *   breaking a few eggs.`;
 *
 * lines(str);
 * // => ['You can't make', 'an omelet without', 'breaking a few eggs.']
 *
 * lines(str2);
 * // => ['You can't make', 'an omelet without', 'breaking a few eggs.']
 */
const lines = subjectString => {
  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string for first argument');
  }

  return subjectString.replace(/\r\n/g, '\n').split('\n');
};

module.exports = lines;
