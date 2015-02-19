/*global isEven*/

(function () {
    'use strict';

    describe('isEven', function () {
        it('expects 2 to be even', function () {
            expect(isEven(2)).toBe(true);
        });

		it('expects 0 to be even', function () {
            expect(isEven(0)).toBe(true);
        });

		it('expects 3 not to be even', function () {
            expect(isEven(3)).toBe(false);
        });
    });
}());