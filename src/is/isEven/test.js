/* global isEven */

(function () {
  'use strict';

  describe('is/isEven', function () {
    it('checks if value is even', function () {
      expect(isEven(2)).toBe(true);

      expect(isEven(0)).toBe(true);

      expect(isEven(3)).toBe(false);
    });
  });
}());
