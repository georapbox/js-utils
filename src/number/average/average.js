/**
 * Calculates the arithmetic mean of the provided numbers.
 *
 * Non-finite numbers and non-number values are ignored.
 * Returns `0` if no valid numbers are provided.
 *
 * @param {...number} nums The numbers to average.
 * @returns {number} The average of the valid numbers, or `0` if none are found.
 * @example
 *
 * average(5, 10, 50, -45, 6, 7);
 * // => 5.5
 *
 * average(2, 4, 0, -0);
 * // => 1.5
 *
 * average(5, 4, null, true, '12', Infinity);
 * // => 4.5
 *
 * average(7);
 * // => 7
 *
 * average();
 * // => 0
 *
 * average(NaN, Infinity, null, undefined);
 * // => 0
 */
export function average(...nums) {
  let sum = 0;
  let count = 0;

  for (const num of nums) {
    if (Number.isFinite(num)) {
      sum += num;
      count++;
    }
  }

  return count > 0 ? sum / count : 0;
}
