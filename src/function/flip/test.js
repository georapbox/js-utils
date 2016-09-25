/* global flip */

(function () {
  'use strict';

  describe('Function/flip', function () {
    it('creates a function that invokes provided function with arguments reversed.', function () {
      var argsToArray = function () {
        return Array.prototype.slice.call(arguments, 0);
      };

      var subtract = function (a, b) {
        return a - b;
      };

      var flipArgsToArray = flip(argsToArray);
      var flipSubtract = flip(subtract);

      expect(argsToArray(1, 2, 3)).toEqual([1, 2, 3]);     // invoked with arguments as provided
      expect(flipArgsToArray(1, 2, 3)).toEqual([3, 2, 1]); // invoked with reversed arguments

      expect(subtract(1, 2)).toEqual(-1);    // invoked with arguments as provided
      expect(flipSubtract(1, 2)).toEqual(1); // invoked with reversed arguments

      expect(function () {
        return flip([1, 2, 3]);
      }).toThrow();
    });
  });
}());
