/*global isFinite*/

(function () {
    'use strict';

    describe('is/isFinite', function () {
        it('isFinite(Infinity) should return false', function () {
            expect(isFinite(Infinity)).toBe(false);
        });

        it('isFinite(-Infinity) should return false', function () {
            expect(isFinite(-Infinity)).toBe(false);
        });

        it('isFinite(NaN) should return false', function () {
            expect(isFinite(NaN)).toBe(false);
        });

        it('isFinite(0) should return true', function () {
            expect(isFinite(0)).toBe(true);
        });

        it('isFinite("0") should return false', function () {
            expect(isFinite('0')).toBe(false);
        });

        it('isFinite(null) should return false', function () {
            expect(isFinite(null)).toBe(false);
        });

        it('isFinite(undefined) should return false', function () {
            expect(isFinite(undefined)).toBe(false);
        });

        it('isFinite(2e64) should return true', function () {
            expect(isFinite(2e64)).toBe(true);
        });
    });
}());
