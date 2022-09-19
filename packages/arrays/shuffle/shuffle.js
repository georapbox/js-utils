'use strict';

/**
 * Creates a new array with its elements' order randomized,
 * using the Fisher-Yates (aka Knuth) Shuffle algorithm.
 *
 * @param {Array} array The array to shuffle.
 * @throws {TypeError} If `array` is not array.
 * @returns {Array} Returns a new array with its elements randomised.
 * @example
 *
 * shuffle(arr);
 * // => ['b', 'f', 'h', 'e', 'd', 'c', 'g', 'a']
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
