/* global isNaN */

(function () {
  'use strict';

  describe('is/isNaN', function () {
    it('check if value is NaN', function () {
      expect(isNaN(NaN)).toBe(true);

      expect(isNaN(10)).toBe(false);

      expect(isNaN(undefined + 5)).toBe(true);

      expect(isNaN(Number.NaN)).toBe(true);

      expect(isNaN('NaN')).toBe(false);

      expect(isNaN(undefined)).toBe(false);

      expect(isNaN({})).toBe(false);

      expect(isNaN(true)).toBe(false);

      expect(isNaN(null)).toBe(false);
    });
  });
}());
