'use strict';

/**
 * Determines whether an array includes a certain element,
 * returning true or false as appropriate.
 *
 * @param {Array} array The array to search.
 * @param {*} searchElement The element to search for.
 * @param {Number} [fromIndex=0] The position in the array at which to begin searching for `searchElement`.
 * A negative value searches from the index of `array.length + fromIndex` by ascending.
 * @throws {TypeError} If `array` is not array.
 * @returns {Boolean} True if array includes `searchElement`, else false.
 * @example
 *
 * includes([1, 2, 3], 2);
 * // -> true
 *
 * includes([1, 2, 3], 4);
 * // -> false
 *
 * includes([1, 2, 3], 3, 3);
 * // -> false
 *
 * includes([1, 2, 3], 3, -1);
 * // -> true
 *
 * includes([1, 2, NaN, 3], NaN);
 * // -> true
 *
 * includes([1, 2, null], null);
 * // -> true
 *
 * includes([1, 2, undefined]);
 * // -> true
 *
 * includes([1, 2, 0], 0);
 * // -> true
 *
 * includes([1, 2, 0], -0);
 * // -> true
 */
const includes = (array, searchElement, fromIndex = 0) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  const arrayLength = array.length;

  if (arrayLength === 0) {
    return false;
  }

  if (Array.prototype.includes) {
    return array.includes(searchElement, fromIndex);
  }

  fromIndex = parseInt(fromIndex, 10) || 0;

  let currentIndex;

  if (fromIndex >= 0) {
    currentIndex = fromIndex;
  } else {
    currentIndex = arrayLength + fromIndex;

    if (currentIndex < 0) {
      currentIndex = 0;
    }
  }

  while (currentIndex < arrayLength) {
    const currentElement = array[currentIndex];

    if (
      searchElement === currentElement
      || (searchElement !== searchElement && currentElement !== currentElement) // Check for NaN values
    ) {
      return true;
    }

    currentIndex += 1;
  }

  return false;
};

module.exports = includes;
