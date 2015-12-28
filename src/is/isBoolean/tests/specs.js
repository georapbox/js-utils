/*global isBoolean*/

(function () {
    'use strict';

    describe('objects/isBoolean', function () {
        it('isBoolean(true) should return true', function () {
            expect(isBoolean(true)).toBe(true);
        });

        it('isBoolean(100) should return false', function () {
            expect(isBoolean(100)).toBe(false);
        });
    });
}());