'use strict';

/**
 * Returns the index of the last element of a collection that passes the callback check.
 *
 * @param {Array} array The array to check.
 * @param {function} callback The function called per iteration.
 * @param {*} [thisArg] Optional object to use as `this` when executing the callback function.
 * @throws {TypeError} If `array` is not array.
 * @throws {TypeError} If `callback` is not function.
 * @returns {Number} Returns the index of the last element that matches the callback check.
 * @example
 *
 * const heroes = [
 *   {name: 'Bruce Wayne', hero: 'Batman'},
 *   {name: 'Clark Kent', hero: 'Superman', specialPowers: ['speed', 'flying', 'strength']},
 *   {name: 'Peter Parker', hero: 'Spiderman', specialPowers: ['climbing']}
 * ];
 *
 * const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'E'];
 * const numbers = [1, 2, 3];
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
 *     for (let i = 0; i < hero.specialPowers.length; i++) {
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
const findLastIndex = (array, callback, thisArg) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Expected a function for second argument');
  }

  if (Array.prototype.findLastIndex) {
    return array.findLastIndex(callback, thisArg);
  }

  let len = array.length;

  while (len--) {
    if (callback.call(thisArg, array[len], len, array)) {
      return len;
    }
  }

  return -1;
};

module.exports = findLastIndex;
