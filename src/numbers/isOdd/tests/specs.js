/*global isOdd*/

(function () {
    'use strict';

    describe('isOdd', function () {
        it('expects 3 to be odd', function () {
            expect(isOdd(3)).toBe(true);
        });

		it('expects 0 not to be odd', function () {
            expect(isOdd(0)).toBe(false);
        });

		it('expects 2 not to be odd', function () {
            expect(isOdd(2)).toBe(false);
        });
    });
}());