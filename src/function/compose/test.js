/* global compose */

(function () {
  'use strict';

  describe('Function/compose', function () {
    function capitalize(item) {
      return item.toUpperCase();
    }

    function head(item) {
      return item[0];
    }

    function reverse(item) {
      return item.split('').reverse().join('');
    }

    it('should compose function to a new one', function () {
      var convert, converted;

      convert = compose(capitalize, reverse);
      converted = convert('hello');
      expect(converted).toEqual('OLLEH');

      convert = compose(capitalize, head, reverse);
      converted = convert('hello');
      expect(converted).toEqual('O');
    });
  });
}());
