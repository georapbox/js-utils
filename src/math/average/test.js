/* global average */

(function () {
  'use strict';

  describe('Math/average', function () {
    it('calculates the average of a set of numbers', function () {
      expect(average()).toEqual(0);

      expect(average(7)).toEqual(7);

      expect(average(2, 4)).toEqual(3);

      expect(average([2, 4])).toEqual(3);

      expect(average(5, 10, 50, -45, 6, 7)).toEqual(5.5);

      expect(average(5, 4, null, true, '12', Infinity)).toEqual(4.5);
    });
  });
}());
