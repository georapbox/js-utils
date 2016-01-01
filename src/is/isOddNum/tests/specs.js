/*global isOddNum*/

(function () {
    'use strict';

    describe('is/isOddNum', function () {
        it('expects 3 to be odd', function () {
            expect(isOddNum(3)).toBe(true);
        });

		it('expects 0 not to be odd', function () {
            expect(isOddNum(0)).toBe(false);
        });

		it('expects 2 not to be odd', function () {
            expect(isOddNum(2)).toBe(false);
        });
    });
}());
