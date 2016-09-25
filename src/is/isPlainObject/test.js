/* global isPlainObject */

(function () {
  'use strict';

  describe('is/isPlainObject', function () {
    function Foo() {
      this.foo = 'bar';
    }

    it('checks if a valud is plain object', function () {
      expect(isPlainObject({foo: 'bar'})).toBe(true);

      expect(isPlainObject(Object.create({}))).toBe(true);

      expect(isPlainObject(Object.create(null))).toBe(true);

      expect(isPlainObject(Object.create({foo: 'bar'}))).toBe(true);

      expect(isPlainObject(new Foo())).toBe(false);

      expect(isPlainObject([1, 2, 3])).toBe(false);

      expect(isPlainObject(null)).toBe(false);

      expect(isPlainObject()).toBe(false);

      expect(isPlainObject(new Object({foo: 'bar'}))).toBe(true);

      expect(isPlainObject(100)).toBe(false);

      expect(isPlainObject('lorem ipsum')).toBe(false);
    });
  });
}());
