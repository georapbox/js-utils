/* global isFiniteNum */

(function () {
  'use strict';

  describe('is/isFiniteNum', function () {
    it('checks if a value is finite', function () {
      expect(isFiniteNum(Infinity)).toBe(false);

      expect(isFiniteNum(-Infinity)).toBe(false);

      expect(isFiniteNum(NaN)).toBe(false);

      expect(isFiniteNum(0)).toBe(true);

      expect(isFiniteNum('0')).toBe(false);

      expect(isFiniteNum(null)).toBe(false);

      expect(isFiniteNum(undefined)).toBe(false);

      expect(isFiniteNum(2e64)).toBe(true);
    });
  });
}());
