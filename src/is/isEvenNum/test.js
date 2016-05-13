/*global isEvenNum*/

(function () {
    'use strict';

    describe('is/isEvenNum', function () {
        it('expects 2 to be even', function () {
            expect(isEvenNum(2)).toBe(true);
        });

		it('expects 0 to be even', function () {
            expect(isEvenNum(0)).toBe(true);
        });

		it('expects 3 not to be even', function () {
            expect(isEvenNum(3)).toBe(false);
        });
    });
}());
