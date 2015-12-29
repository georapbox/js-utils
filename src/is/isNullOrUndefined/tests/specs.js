/*global isNullOrUndefined*/

(function () {
    'use strict';

    describe('is/isNullOrUndefined', function () {
        var foo;

        it('isNullOrUndefined() should return true', function () {
            expect(isNullOrUndefined()).toBe(true);
        });

        it('isNullOrUndefined(foo) should return true', function () {
            expect(isNullOrUndefined(foo)).toBe(true);
        });

        it('isNullOrUndefined(null) should return true', function () {
            expect(isNullOrUndefined(null)).toBe(true);
        });

        it('isNullOrUndefined({foo: "bar"}) should return false', function () {
            expect(isNullOrUndefined({foo: 'bar'})).toBe(false);
        });
    });
}());
