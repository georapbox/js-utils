/*global isFalsy*/

(function () {
    'use strict';

    describe('is/isFalsy', function () {
        it('isFalsy(true) should return false', function () {
            expect(isFalsy(true)).toBe(false);
        });

        it('isFalsy(" ") should return false', function () {
            expect(isFalsy(' ')).toBe(false);
        });

        it('isFalsy({foo: "bar"}) should return false', function () {
            expect(isFalsy({foo: 'bar'})).toBe(false);
        });

        it('isFalsy(false) should return true', function () {
            expect(isFalsy(false)).toBe(true);
        });

        it('isFalsy(NaN) should return true', function () {
            expect(isFalsy(NaN)).toBe(true);
        });

        it('isFalsy() should return true', function () {
            expect(isFalsy()).toBe(true);
        });

        it('isFalsy(0) should return true', function () {
            expect(isFalsy(0)).toBe(true);
        });

        it('isFalsy("") should return true', function () {
            expect(isFalsy('')).toBe(true);
        });
    });
}());
