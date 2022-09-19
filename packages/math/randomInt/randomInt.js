'use strict';

/**
 * Returns a pseudo-random integer number between a min (inclusive) and a max (inclusive) value.
 * If `min` is greater than `max` the parameters are swapped to support inverted ranges.
 *
 * @param {Number} min The minimum value of the range.
 * @param {Number} max The maximum value of the range.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @returns {Number} The pseudo-random integer number.
 * @example
 *
 * randomInt(3, 8);
 * // => Any integer number between 3 (inclusive) and 8 (inclusive). eg 6
 */
const randomInt = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return Math.floor(
    Math.min(min, max) + Math.random() * (Math.max(min, max) - Math.min(min, max) + 1)
  );
};

module.exports = randomInt;
