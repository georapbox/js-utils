/* global randomBetween */

(function () {
  'use strict';

  describe('Number/randomBetween', function () {
    it('returns a pseudo-random number (integer or floating-point) between a min (inclusive) and a max (exclusive) value.', function () {
      expect(randomBetween(3)).toEqual(NaN);

      expect(randomBetween(3, null)).toEqual(NaN);

      expect(randomBetween(3, Infinity)).toEqual(NaN);

      expect(randomBetween(3, 8)).toBeLessThan(8);

      expect(randomBetween(3, 8)).toBeGreaterThan(2.9);
    });
  });
}());
