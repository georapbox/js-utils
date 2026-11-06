/**
 * Clamps a number within the inclusive minimum and maximum bounds.
 *
 * Based on the TC39 Math.clamp proposal:
 * https://tc39.es/proposal-math-clamp/
 *
 * Returns `NaN` if any argument is `NaN`.
 * Supports infinite bounds and preserves signed-zero behavior.
 *
 * @param {number} value The number to clamp.
 * @param {number} min The lower bound.
 * @param {number} max The upper bound.
 * @returns {number} The clamped number.
 * @throws {TypeError} If any argument is not a number.
 * @throws {RangeError} If `min` is greater than `max`, unless an argument is `NaN`.
 * @example
 *
 * clamp(10, -5, 5);
 * // => 5
 *
 * clamp(-10, -5, 5);
 * // => -5
 *
 * clamp(50, 0, 100);
 * // => 50
 *
 * clamp(10, -Infinity, Infinity);
 * // => 10
 *
 * clamp(NaN, 0, 100);
 * // => NaN
 *
 * clamp(-0, +0, 10);
 * // => +0
 */
export function clamp(value, min, max) {
  if (typeof value !== 'number') {
    throw new TypeError('value must be a number');
  }

  if (typeof min !== 'number') {
    throw new TypeError('min must be a number');
  }

  if (typeof max !== 'number') {
    throw new TypeError('max must be a number');
  }

  if (Number.isNaN(value) || Number.isNaN(min) || Number.isNaN(max)) {
    return NaN;
  }

  if (min > max) {
    throw new RangeError('min cannot be greater than max');
  }

  if (Object.is(min, max)) {
    return min;
  }

  if (Object.is(value, -0) && Object.is(min, +0)) {
    return +0;
  }

  if (Object.is(value, +0) && Object.is(min, -0)) {
    return +0;
  }

  if (value < min) {
    return min;
  }

  if (Object.is(value, -0) && Object.is(max, +0)) {
    return -0;
  }

  if (Object.is(value, +0) && Object.is(max, -0)) {
    return -0;
  }

  if (value > max) {
    return max;
  }

  return value;
}
