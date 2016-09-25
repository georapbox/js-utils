/* global lines */

(function () {
  'use strict';

  describe('String/lines', function () {
    var str = 'You can\'t make\nan omelet without\r\nbreaking a few eggs.';

    it('should return an array with the lines from a string', function () {
      expect(lines(str).length).toEqual(3);
      expect(lines(str)[0]).toEqual('You can\'t make');
      expect(lines(str)[1]).toEqual('an omelet without');
      expect(lines(str)[2]).toEqual('breaking a few eggs.');
    });
  });
}());
