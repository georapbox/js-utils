/*global isObject*/

(function () {
    'use strict';

    describe('is/isObject', function () {
        it('checks if a value is object', function () {
            expect(isObject({})).toEqual(true);

            expect(isObject(function test() {})).toEqual(true);

            expect(isObject([1, 2, 3])).toEqual(true);

            expect(isObject(new String('Hello world'))).toEqual(true);

            expect(isObject('Hello world')).toEqual(false);
        });
    });
}());
