'use strict';

/**
 * Returns a weighted random number (that tends to the center) of a range of numbers based on the number of the iterations set.
 * The higher the iterations, the higher is the possibility the returned value to be closer to the center of the range.
 *
 * @param {Number} min The minimum value of the range.
 * @param {Number} max The maximum value of the range.
 * @param {Number} iterations The number of the iterations. The value passed is converted to integer internally using `Math.floor()`.
 * @throws {TypeError} If one or more of the arguments passed is not a number.
 * @throws {RangeError} If `iterations` is not a positive number. or zero, or `NaN`, or greater than `Number.MAX_SAFE_INTEGER`.
 * @returns {Number} The weighted random number.
 * @example
 *
 * randomDist(0, 100, 200);
 * // => 49.27716133759931
 */
const randomDist = (min, max, iterations) => {
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

  if (typeof min !== 'number' || typeof max !== 'number' || typeof iterations !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  if (iterations <= 0 || iterations > MAX_SAFE_INTEGER || iterations !== iterations) {
    throw new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for third argument');
  }

  iterations = Math.floor(iterations);

  let total = 0;

  for (let i = 0; i < iterations; i += 1) {
    total += Math.min(min, max) + Math.random() * (Math.max(min, max) - Math.min(min, max));
  }

  return total / iterations;
};

module.exports = randomDist;
