/**
 * Randomize array element order in-place.
 * Using the Fisher-Yates (aka Knuth) Shuffle algorithm.
 * Nice explanation and visualization [http://bost.ocks.org/mike/shuffle/]
 * @param {array} array The array to shuffle.
 */
function shuffle(array) {
    'use strict';

    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex) {
        // Pick a remaining element...
        randomIndex = (Math.random() * currentIndex--) | 0;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
