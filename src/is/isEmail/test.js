/* global isEmail */

(function () {
  'use strict';

  describe('is/isEmail', function () {
    it('should validate various strings as emails', function () {
      expect(isEmail('me@example.com')).toBe(true);

      expect(isEmail('a.nonymous@example.com')).toBe(true);

      expect(isEmail('name+tag@example.com')).toBe(true);

      expect(isEmail('name\@tag@example.com')).toBe(true);

      expect(isEmail('name@tag@example.com')).toBe(true);

      expect(isEmail('spaces are allowed@example.com')).toBe(true);

      expect(isEmail("!#$%&'+-/=.?^`{|}~@[1.0.0.127]")).toBe(true);

      expect(isEmail("!#$%&'+-/=.?^`{|}~@[IPv6:0123:4567:89AB:CDEF:0123:4567:89AB:CDEF]")).toBe(false);
    });
  });
}());
