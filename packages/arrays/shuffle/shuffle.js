'use strict';

/**
 * Creates a new array with its elements' order randomized,
 * using the Fisher-Yates (aka Knuth) Shuffle algorithm.
 *
 * @param {Array} array The array to shuffle.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} Returns a new array with its elements randomized.
 * @example
 *
 * shuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
 * // => ['b', 'f', 'h', 'e', 'd', 'c', 'g', 'a']
 *
 * shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 * // => [5, 10, 9, 3, 4, 1, 6, 7, 8, 2]
 */
const shuffle = array => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  const newArray = [...array];
  let currentIndex = newArray.length;

  // While remaining elements to shuffle...
  while (currentIndex) {
    const randomIndex = Math.random() * currentIndex-- | 0; // Pick a remaining element...
    const temporaryValue = newArray[currentIndex]; // And swap it with the current element.

    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
};

module.exports = shuffle;
