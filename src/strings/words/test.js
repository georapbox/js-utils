/* global words */

(function () {
  'use strict';

  describe('String/words', function () {
    it('should count words in a subject string', function () {
      expect(function () {
        return words({});
      }).toThrow();

      expect(words('')).toEqual([]);

      expect(words('Hello world! \n A is a message from outter \t space.').length).toEqual(9);
    });
  });
}());
