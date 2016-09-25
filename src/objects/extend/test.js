/* global extend */

(function () {
  'use strict';

  describe('Object/extend', function () {
    it('deeply merges objects', function () {
      expect(extend({}, {foo: 'foo'}, {foo: 'fooBar', bar: 'bar'}))
        .toEqual({foo: 'fooBar', bar: 'bar'});
    });
  });
}());
