/*global isNonExisty*/

(function () {
    'use strict';

    describe('is/isNonExisty', function () {
        var foo;

        it('isNonExisty() should return true', function () {
            expect(isNonExisty()).toBe(true);
        });

        it('isNonExisty(foo) should return true', function () {
            expect(isNonExisty(foo)).toBe(true);
        });

        it('isNonExisty(null) should return true', function () {
            expect(isNonExisty(null)).toBe(true);
        });

        it('isNonExisty({foo: "bar"}) should return false', function () {
            expect(isNonExisty({foo: 'bar'})).toBe(false);
        });
    });
}());
