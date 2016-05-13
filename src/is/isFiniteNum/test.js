/*global isFiniteNum*/

(function () {
    'use strict';

    describe('is/isFiniteNum', function () {
        it('isFiniteNum(Infinity) should return false', function () {
            expect(isFiniteNum(Infinity)).toBe(false);
        });

        it('isFiniteNum(-Infinity) should return false', function () {
            expect(isFiniteNum(-Infinity)).toBe(false);
        });

        it('isFiniteNum(NaN) should return false', function () {
            expect(isFiniteNum(NaN)).toBe(false);
        });

        it('isFiniteNum(0) should return true', function () {
            expect(isFiniteNum(0)).toBe(true);
        });

        it('isFiniteNum("0") should return false', function () {
            expect(isFiniteNum('0')).toBe(false);
        });

        it('isFiniteNum(null) should return false', function () {
            expect(isFiniteNum(null)).toBe(false);
        });

        it('isFiniteNum(undefined) should return false', function () {
            expect(isFiniteNum(undefined)).toBe(false);
        });

        it('isFiniteNum(2e64) should return true', function () {
            expect(isFiniteNum(2e64)).toBe(true);
        });
    });
}());
