/**
 * Returns a pseudo-random number within a range, including the lower
 * bound and excluding the upper bound under normal floating-point arithmetic.
 *
 * If `min` is greater than `max`, the bounds are swapped.
 * Both bounds must be finite numbers and must not be equal.
 *
 * Due to floating-point rounding, the upper bound may occasionally
 * be returned. Randomness is provided by `Math.random()` and is not
 * suitable for cryptographic purposes.
 *
 * @param {number} min The lower bound of the range.
 * @param {number} max The upper bound of the range.
 * @returns {number} A pseudo-random number within the range.
 * @throws {TypeError} If either argument is not a finite number.
 * @throws {RangeError} If the bounds are equal.
 * @example
 *
 * randomRange(3, 8);
 * // => A number between 3 and 8 (subject to floating-point rounding)
 *
 * randomRange(8, 3);
 * // => A number between 3 and 8
 *
 * randomRange(-5, 5);
 * // => A number between -5 and 5
 *
 * randomRange(0.5, 2.5);
 * // => A number between 0.5 and 2.5
 */
export function randomRange(min, max) {
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new TypeError('Expected finite numbers for both arguments');
  }

  if (min === max) {
    throw new RangeError('min and max cannot be equal');
  }

  const lower = Math.min(min, max);
  const upper = Math.max(min, max);

  return lower + Math.random() * (upper - lower);
}
