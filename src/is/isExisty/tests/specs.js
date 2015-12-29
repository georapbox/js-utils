/*global isExisty*/

(function () {
    'use strict';

    describe('is/isExisty', function () {
        it('isExisty() should return false', function () {
            expect(isExisty()).toBe(false);
        });

        it('isExisty("Foo") should return true', function () {
            expect(isExisty('Foo')).toBe(true);
        });

        it('isExisty(null) should return false', function () {
            expect(isExisty(null)).toBe(false);
        });
    });
}());
