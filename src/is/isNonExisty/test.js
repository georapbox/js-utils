/* global isNonExisty */

(function () {
  'use strict';

  describe('is/isNonExisty', function () {
    var foo;

    it('checks if a value is non existy', function () {
      expect(isNonExisty()).toBe(true);

      expect(isNonExisty(foo)).toBe(true);

      expect(isNonExisty(null)).toBe(true);

      expect(isNonExisty({foo: 'bar'})).toBe(false);
    });
  });
}());
