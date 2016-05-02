/*global isInfiniteNum*/

(function () {
    'use strict';

    describe('is/isInfiniteNum', function () {
        it('isInfiniteNum(Infinity) should return true', function () {
            expect(isInfiniteNum(Infinity)).toBe(true);
        });

        it('isInfiniteNum(-Infinity) should return true', function () {
            expect(isInfiniteNum(-Infinity)).toBe(true);
        });

        it('isInfiniteNum(NaN) should return false', function () {
            expect(isInfiniteNum(NaN)).toBe(false);
        });

        it('isInfiniteNum(0) should return false', function () {
            expect(isInfiniteNum(0)).toBe(false);
        });

        it('isInfiniteNum("0") should return false', function () {
            expect(isInfiniteNum('0')).toBe(false);
        });

        it('isInfiniteNum(null) should return false', function () {
            expect(isInfiniteNum(null)).toBe(false);
        });

        it('isInfiniteNum(undefined) should return false', function () {
            expect(isInfiniteNum(undefined)).toBe(false);
        });

        it('isInfiniteNum(2e64) should return false', function () {
            expect(isInfiniteNum(2e64)).toBe(false);
        });
    });
}());
