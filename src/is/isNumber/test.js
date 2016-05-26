/*global isNumber*/

(function () {
    'use strict';

    describe('is/isNumber', function () {
        it('checks if a valud is number', function () {
            expect(isNumber(404)).toEqual(true);

            expect(isNumber(new Date().getTime())).toEqual(true);

            expect(isNumber(NaN)).toEqual(true);

            expect(isNumber('302')).toEqual(false);
        });
    });
}());
