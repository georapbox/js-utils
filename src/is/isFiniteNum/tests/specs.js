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

        it('isFiniteNum("0") should throw TypeError', function () {
            expect(function () {
                return isFiniteNum('0');
            }).toThrow();
        });

        it('isFiniteNum(null) should throw TypeError', function () {
            expect(function () {
                return isFiniteNum(null);
            }).toThrow();
        });

        it('isFiniteNum(undefined) should throw TypeError', function () {
            expect(function () {
                return isFiniteNum(undefined);
            }).toThrow();
        });

        it('isFiniteNum(2e64) should return true', function () {
            expect(isFiniteNum(2e64)).toBe(true);
        });
    });
}());
