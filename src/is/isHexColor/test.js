/* global isHexColor */

(function () {
  'use strict';

  describe('is/isHexColor', function () {
    it('checks if a value matches a hexadecimal color regular expression', function () {
      expect(isHexColor('#f5f5f5')).toEqual(true);

      expect(isHexColor('#9c0')).toEqual(true);

      expect(isHexColor('something')).toEqual(false);

      expect(isHexColor(333)).toEqual(true);

      expect(isHexColor('333')).toEqual(true);

      expect(isHexColor(6.6)).toEqual(false);

      expect(isHexColor()).toEqual(false);

      expect(isHexColor(null)).toEqual(false);
    });
  });
}());
