/* global fill */

(function () {
  'use strict';

  describe('Array/fill', function () {
    it('fills elements of array with value from start up to end (not including end)', function () {
      expect(fill(['a', 'b', 'c'], '*')).toEqual(['*', '*', '*']);

      expect(fill(['a', 'b', 'c'], '*', 0, 2)).toEqual(['*', '*', 'c']);

      expect(fill(['a', 'b', 'c'], '*', -1, 3)).toEqual(['a', 'b', '*']);

      expect(fill(['a', 'b', 'c'], '*', -1, 2)).toEqual(['a', 'b', 'c']);

      expect(fill(['a', 'b', 'c'], '*', 0, -2)).toEqual(['*', 'b', 'c']);

      expect(fill(['a', 'b', 'c'])).toEqual([undefined, undefined, undefined]);

      expect(function () {
        return fill({foo: 'bar'}, '*');
      }).toThrow();
    });
  });
}());
