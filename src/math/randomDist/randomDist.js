'use strict';

/**
 * Returns a weighted random number (that tends to the center)
 * of a range of numbers based on the number of the iterations set.
 *
 * @category Math
 * @param {Number} min The minimum value of the range.
 * @param {Number} max The maximum value of the range.
 * @param {Number} [iterations=2] The number of the iterations.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @return {Number} The weighted random number.
 * @example
 *
 * randomDist(0, 100, 3);
 * // -> 40.30361851105565
 *
 * randomDist(0, 100); // iterations = 2
 * // -> 59.116191772363024
 */
function randomDist(min, max, iterations) {
  var total, i;

  if (
    typeof min !== 'number' || typeof max !== 'number'
    || typeof iterations !== 'number' && iterations != null
  ) {
    throw new TypeError('all arguments of "randomDist" must be numbers');
  }

  total = 0;
  i = 0;

  iterations = iterations || 2;

  for (i; i < iterations; i += 1) {
    total += Math.min(min, max) + Math.random() * (Math.max(min, max) - Math.min(min, max));
  }

  return total / iterations;
}

module.exports = randomDist;