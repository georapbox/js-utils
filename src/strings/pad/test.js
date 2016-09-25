/* global pad */

(function () {
  'use strict';

  describe('String/pad', function () {
    it('pads a string on both sides to the given length', function () {
      expect(pad('Hello', 9, ' ')).toBe('  Hello  ');

      expect(pad('Hello', 9, '-')).toBe('--Hello--');
    });
  });
}());
