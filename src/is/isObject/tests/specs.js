/*global isObject*/

(function () {
    'use strict';

    describe('is/isObject', function () {
        it('isObject({}) should return true', function () {
            expect(isObject({})).toEqual(true);
        });

        it('isObject(function test() {}) should return true', function () {
            expect(isObject(function test() {})).toEqual(true);
        });

        it('isObject([1, 2, 3]) should return true', function () {
            expect(isObject([1, 2, 3])).toEqual(true);
        });

        it('isObject(new String(\'Hello world\')) should return true', function () {
            expect(isObject(new String('Hello world'))).toEqual(true);
        });

        it('isObject(\'Hello world\') should return false', function () {
            expect(isObject('Hello world')).toEqual(false);
        });
    });
}());
