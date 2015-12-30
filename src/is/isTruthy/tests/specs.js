/*global isTruthy*/

(function () {
    'use strict';

    describe('is/isTruthy', function () {
        it('isTruthy(true) should return true', function () {
            expect(isTruthy(true)).toBe(true);
        });

        it('isTruthy(" ") should return true', function () {
            expect(isTruthy(' ')).toBe(true);
        });

        it('isTruthy({foo: "bar"}) should return true', function () {
            expect(isTruthy({foo: 'bar'})).toBe(true);
        });

        it('isTruthy(false) should return false', function () {
            expect(isTruthy(false)).toBe(false);
        });

        it('isTruthy(NaN) should return false', function () {
            expect(isTruthy(NaN)).toBe(false);
        });

        it('isTruthy() should return false', function () {
            expect(isTruthy()).toBe(false);
        });

        it('isTruthy(0) should return false', function () {
            expect(isTruthy(0)).toBe(false);
        });

        it('isTruthy("") should return false', function () {
            expect(isTruthy('')).toBe(false);
        });
    });
}());
