/* global shuffle */

(function () {
  'use strict';

  describe('Array/shuffle', function () {
    it('shuffles an array', function () {
      var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

      expect(shuffle(arr).length).toEqual(8);

      expect(shuffle(arr)).not.toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);

      expect(function () {
        return shuffle({a: 'a', b: 'b', c: 'c'});
      }).toThrow();
    });
  });
}());
