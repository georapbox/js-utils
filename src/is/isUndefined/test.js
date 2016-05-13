/*global isUndefined*/

(function () {
    'use strict';

    describe('is/isUndefined', function () {
        var foo;

        it('isUndefined() should return true', function () {
            expect(isUndefined()).toBe(true);
        });

        it('isUndefined(foo) should return true', function () {
            expect(isUndefined(foo)).toBe(true);
        });

        it('isUndefined(null) should return false', function () {
            expect(isUndefined(null)).toBe(false);
        });

        it('isUndefined(100) should return false', function () {
            expect(isUndefined(100)).toBe(false);
        });
    });
}());
