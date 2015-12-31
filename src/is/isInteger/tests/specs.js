/*global isInteger*/

(function () {
    'use strict';

    describe('is/isInteger', function () {
        it('isInteger(0.1) should return false', function () {
            expect(isInteger(0.1)).toEqual(false);
        });

        it('isInteger(1) should return true', function () {
            expect(isInteger(1)).toEqual(true);
        });

        it('isInteger(Math.PI) should return false', function () {
            expect(isInteger(Math.PI)).toEqual(false);
        });

        it('isInteger(-100000) should return true', function () {
            expect(isInteger(-100000)).toEqual(true);
        });

        it('isInteger(NaN) should return false', function () {
            expect(isInteger(NaN)).toEqual(false);
        });

        it('isInteger(0) should return true', function () {
            expect(isInteger(0)).toEqual(true);
        });

        it('isInteger("10") should return false', function () {
            expect(isInteger('10')).toEqual(false);
        });

        it('isInteger(Infinite) should return false', function () {
            expect(isInteger(Infinity)).toEqual(false);
        });

        it('isInteger(9007199254740992) should return false', function () {
            expect(isInteger(9007199254740992)).toEqual(true);
        });

        it('isInteger(-9007199254740992) should return false', function () {
            expect(isInteger(-9007199254740992)).toEqual(true);
        });
    });
}());
