/*global isTrue*/

(function () {
    'use strict';

    describe('is/isTrue', function () {
        it('isTrue(true) should return true', function () {
            expect(isTrue(true)).toBe(true);
        });

        it('isTrue(false) should return false', function () {
            expect(isTrue(false)).toBe(false);
        });

        it('isTrue() should return false', function () {
            expect(isTrue()).toBe(false);
        });
    });
}());
