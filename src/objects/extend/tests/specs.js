/*global extend*/

(function () {
    'use strict';

    describe('objects/extend', function () {
        it('extend({}, { foo: \'foo\' }, { foo: \'fooBar\', bar: \'bar\' }) should return {foo: \'fooBar\', bar: \'bar\'}', function () {
            expect(extend({}, { foo: 'foo' }, { foo: 'fooBar', bar: 'bar' })).toEqual({foo: 'fooBar', bar: 'bar'});
        });
    });
}());