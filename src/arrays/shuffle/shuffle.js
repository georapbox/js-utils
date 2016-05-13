/**
 * Randomize an array elements' order.
 * Using the Fisher-Yates (aka Knuth) Shuffle algorithm.
 * Nice explanation and visualization [http://bost.ocks.org/mike/shuffle/]
 * @param {Array} array The array to shuffle.
 * @return {Array} A new array (copy of the original) with its elements randomised.
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
