/**
 * Returns the index of the last element of a collection that passes the callback check.
 *
 * @category Array
 * @param {Array} array The array to check.
 * @param {function} callback The function called per iteration.
 * @returns {Number} Returns the index of the last element that matches the callback check.
 * @example
 *
 * var heroes = [
 *   {name: 'Bruce Wayne', hero: 'Batman'},
 *   {name: 'Clark Kent', hero: 'Superman', specialPowers: ['speed', 'flying', 'strength']},
 *   {name: 'Peter Parker', hero: 'Spiderman', specialPowers: ['climbing']}
 * ];
 *
 * var characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'E'];
 * var numbers = [1, 2, 3];
 *
 * findLastIndex(characters, function (chr, index, array) {
 *   return chr === 'E';
 * });
 * // -> 7
 *
 * findLastIndex(heroes, function (hero, index, array) {
 *   return hero.name === 'Clark Kent';
 * });
 * // -> 1
 *
 * findLastIndex(heroes, function (hero, index, array) {
 *   if (hero.specialPowers) {
 *     for (var i = 0; i < hero.specialPowers.length; i++) {
 *       if (hero.specialPowers[i] === 'climbing') return true;
 *     }
 *  }
 * });
 * // -> 2
 *
 * findLastIndex(numbers, function (n) {
 *   return n > 10;
 * });
 * // -> -1
 */
function findLastIndex(array, callback) {
    'use strict';

    var length;

    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('Expected a function');
    }

    length = array.length;

    while (length--) {
        if (callback(array[length], length, array)) {
            return length;
        }
    }

    return -1;
}
