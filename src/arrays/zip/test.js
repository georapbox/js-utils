/*global zip*/

(function () {
  'use strict';

  describe('Array/zip', function () {
    it('creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on', function () {
      var arr1 = [1, 2, 3],
        arr2 = [11, 22],
        arr3 = [111],
        zipped = zip(arr1, arr2, arr3);

      expect(zipped.length).toEqual(3);

      expect(zipped[0].length).toEqual(3);
      expect(zipped[0][0]).toEqual(1);
      expect(zipped[0][1]).toEqual(11);
      expect(zipped[0][2]).toEqual(111);

      expect(zipped[1].length).toEqual(3);
      expect(zipped[1][0]).toEqual(2);
      expect(zipped[1][1]).toEqual(22);
      expect(zipped[1][2]).toEqual(undefined);

      expect(zipped[2].length).toEqual(3);
      expect(zipped[2][0]).toEqual(3);
      expect(zipped[2][1]).toEqual(undefined);
      expect(zipped[2][2]).toEqual(undefined);
    });

    it('should return an empty array if no arguments passed', function () {
      var zipped = zip();
      expect({}.toString.call(zipped) === '[object Array]');
      expect(zipped.length).toEqual(0);
    });
  });
}());
