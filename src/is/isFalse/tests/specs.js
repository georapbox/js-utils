/*global isFalse*/

(function () {
    'use strict';

    describe('is/isFalse', function () {
        it('isFalse(false) should return true', function () {
            expect(isFalse(false)).toBe(true);
        });

        it('isFalse(true) should return false', function () {
            expect(isFalse(true)).toBe(false);
        });

        it('isFalse() should return false', function () {
            expect(isFalse()).toBe(false);
        });
    });
}());
