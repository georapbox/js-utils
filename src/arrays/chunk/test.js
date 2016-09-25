/* global chunk */

(function () {
  'use strict';

  describe('Array/chunk', function () {
    it('creates an array of elements split into groups the length of size specified', function () {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);

      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);

      expect(chunk([1, 2, 3, 4, 5], -1)).toEqual([]);

      expect(chunk([1, 2, 3, 4, 5])).toEqual([]);

      expect(chunk([1, 2, 3, 4, 5], null)).toEqual([]);

      expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);

      expect(chunk([1, 2, 3, 4], '3')).toEqual([[1, 2, 3], [4]]);

      expect(chunk([1, 2, 3, 4], Infinity)).toEqual([[1, 2, 3, 4]]);

      expect(chunk([1, 2, 3, 4], -Infinity)).toEqual([]);

      expect(chunk([1, 2, 3, 4], 2.7)).toEqual([[1, 2], [3, 4]]);

      expect(chunk([1, 2, 3, 4], 'test')).toEqual([]);
    });
  });
}());
