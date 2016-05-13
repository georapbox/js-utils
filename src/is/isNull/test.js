/*global isNull*/

(function () {
    'use strict';

    describe('is/isNull', function () {
        it('isNull(null) should return true', function () {
            expect(isNull(null)).toBe(true);
        });

        it('isNull(100) should return false', function () {
            expect(isNull(100)).toBe(false);
        });

        it('isNull() should return false', function () {
            expect(isNull()).toBe(false);
        });
    });
}());
