/* global trimRight */

(function () {
  'use strict';

  describe('String/trimRight', function () {
    it('trimRight("Hello    ") should have length 5', function () {
      expect(trimRight('Hello    ').length).toEqual(5);
    });
  });
}());
