/* global diff */

(function () {
  'use strict';

  describe('Array/diff', function () {
    var a = [1, 2, 3, 4, {}],
      b = [5, 2, 10];

    it('diffs two arrays', function () {
      expect(diff(a, b)).toEqual([1, 3, 4, {}]);

      expect(diff(b, a)).toEqual([5, 10]);

      expect(diff(a)).toEqual([1, 2, 3, 4, {}]);
    });
  });
}());
