/**
 * Creates a new array with its elements' order randomized,
 * using the Fisher-Yates (aka Knuth) Shuffle algorithm.
 *
 * @category Array
 * @param {Array} array The array to shuffle.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} Returns a new array with its elements randomised.
 * @example
 *
 * shuffle(arr);
 * // -> ['b', 'f', 'h', 'e', 'd', 'c', 'g', 'a']
 */
function shuffle(array) {
    'use strict';

    var newArray, currentIndex, temporaryValue, randomIndex;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    newArray = array.slice(0); // Ensure that original array stays intact.
    currentIndex = newArray.length;

    // While remaining elements to shuffle...
    while (currentIndex) {
        // Pick a remaining element...
        randomIndex = (Math.random() * currentIndex--) | 0;

        // And swap it with the current element.
        temporaryValue = newArray[currentIndex];
        newArray[currentIndex] = newArray[randomIndex];
        newArray[randomIndex] = temporaryValue;
    }

    return newArray;
}
