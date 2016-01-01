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

        it('isInfiniteNum("0") should throw TypeError', function () {
            expect(function () {
                return isInfiniteNum('0');
            }).toThrow();
        });

        it('isInfiniteNum(null) should throw TypeError', function () {
            expect(function () {
                return isInfiniteNum(null);
            }).toThrow();
        });

        it('isInfiniteNum(undefined) should throw TypeError', function () {
            expect(function () {
                return isInfiniteNum(undefined);
            }).toThrow();
        });

        it('isInfiniteNum(2e64) should return false', function () {
            expect(isInfiniteNum(2e64)).toBe(false);
        });
    });
}());
