'use strict';

/**
 * Returns a weighted random number (that tends to the center) of a range of numbers based on the number of the iterations set.
 * The higher the iterations, the higher is the possibility the returned value to be closer to the center of the range.
 *
 * @param {Number} min The minimum value of the range.
 * @param {Number} max The maximum value of the range.
 * @param {Number} iterations The number of the iterations. The value passed is converted to integer internally using `Math.floor()`.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @throws {Error} If `iterations` is not a positive number.
 * @returns {Number} The weighted random number.
 * @example
 *
 * randomDist(0, 100, 200);
 * // -> 49.27716133759931
 */
function randomDist(min, max, iterations) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof iterations !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  if (iterations <= 0) {
    throw new Error('Expected a positive number as third argument');
  }

  var total = 0;
  var i = 0;

  iterations = Math.floor(iterations);

  for (i; i < iterations; i += 1) {
    total += Math.min(min, max) + Math.random() * (Math.max(min, max) - Math.min(min, max));
  }

  return total / iterations;
}

module.exports = randomDist;
