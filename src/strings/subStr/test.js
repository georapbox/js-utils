/* global subStr */

(function () {
  'use strict';

  describe('String/subStr', function () {
    it('should return a substring denoted by n (positive or negative) characters', function () {
      var str = 'Lorem ispum dolor sit amet.';

      expect(subStr(str, 5)).toEqual('Lorem');

      expect(subStr(str, -3)).toEqual('et.');

      expect(subStr(str, 0)).toEqual('');

      expect(subStr(str, parseInt('-4', 10))).toEqual('met.');

      expect(subStr(str, 'hello')).toEqual('Lorem ispum dolor sit amet.');

      expect(function () {
        return subStr({}, 5);
      }).toThrow();
    });
  });
}());
