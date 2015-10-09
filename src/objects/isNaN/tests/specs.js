/*global isNaN*/

(function () {
    'use strict';

    describe('objects/isNaN', function () {
        it('isNaN(NaN) should return true', function () {
            expect(isNaN(NaN)).toEqual(true);
        });

        it('isNaN(10) should return false', function () {
            expect(isNaN(10)).toEqual(false);
        });

        it('isNaN(undefined + 5) should return true', function () {
            expect(isNaN(undefined + 5)).toEqual(true);
        });
    });
}());
