/* global isDate */

(function () {
  'use strict';

  describe('is/isDate', function () {
    it('checks if a value is Date object', function () {
      expect(isDate(new Date())).toBe(true);

      expect(isDate(new Date().getTime())).toBe(false);
    });
  });
}());
