/* global forOwn */

(function () {
  'use strict';

  describe('Object/forOwn', function () {
    it('iterates over own enumerable properties of an object', function () {
      var props = [];

      function Shape() {
        this.x = 0;
        this.y = 0;
      }

      Shape.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
      };

      forOwn(new Shape(), function (value, key) {
        props.push(key);
      });

      expect(props).toEqual(['x', 'y']);
    });
  });
}());
