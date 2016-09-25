/* global isInteger */

(function () {
  'use strict';

  describe('is/isInteger', function () {
    it('checks if a value is integer', function () {
      expect(isInteger(0.1)).toEqual(false);

      expect(isInteger(1)).toEqual(true);

      expect(isInteger(Math.PI)).toEqual(false);

      expect(isInteger(-100000)).toEqual(true);

      expect(isInteger(NaN)).toEqual(false);

      expect(isInteger(0)).toEqual(true);

      expect(isInteger('10')).toEqual(false);

      expect(isInteger(Infinity)).toEqual(false);

      expect(isInteger(9007199254740992)).toEqual(true);

      expect(isInteger(-9007199254740992)).toEqual(true);
    });
  });
}());
