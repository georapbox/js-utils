/* global isElement */

(function () {
  'use strict';

  describe('is/isElement', function () {
    it('checks if a value is DOM element', function () {
      expect(isElement(document.getElementsByTagName('head')[0])).toBe(true);

      expect(isElement('Lorem')).toBe(false);
    });
  });
}());
