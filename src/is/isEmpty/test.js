/* global isEmpty */

(function () {
  'use strict';

  describe('is/isEmpty', function () {
    it('checks if a value is empty', function () {
      var obj = {};

      expect(isEmpty([])).toBe(true);

      expect(isEmpty('')).toBe(true);

      expect(isEmpty({})).toBe(true);

      expect(isEmpty(['a', 'b'])).toBe(false);

      expect(isEmpty('Lorem ipsum dolor sit amet')).toBe(false);

      expect(isEmpty({a: 'a', b: 'b'})).toBe(false);

      Object.defineProperty(obj, 'hidden', {
        value: null,
        enumerable: false
      });

      // non enumerable property
      expect(isEmpty(obj)).toBe(true);

      // properties inherited from prototypes
      expect(isEmpty(Object.create({foo: 'bar'}))).toBe(false);
    });
  });
}());
