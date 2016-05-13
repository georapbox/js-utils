/*global isNumber*/

(function () {
    'use strict';

    describe('is/isNumber', function () {
        it('isNumber(404) should return true', function () {
            expect(isNumber(404)).toEqual(true);
        });

        it('isNumber(new Date().getTime()) should return true', function () {
            expect(isNumber(new Date().getTime())).toEqual(true);
        });

        it('isNumber(NaN) should return true', function () {
            expect(isNumber(NaN)).toEqual(true);
        });

        it('isNumber(\'302\') should return false', function () {
            expect(isNumber('302')).toEqual(false);
        });
    });
}());
