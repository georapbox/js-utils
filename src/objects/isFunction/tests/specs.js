/*global isFunction*/

(function () {
    'use strict';

    describe('objects/isFunction', function () {
        it('isFunction(function test() {}) should return true', function () {
            expect(isFunction(function test() {})).toEqual(true);
        });

        it('isFunction({foo: \'bar\'}) should return false', function () {
            expect(isFunction({ foo: 'bar' })).toEqual(false);
        });
    });
}());