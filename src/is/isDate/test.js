/*global isDate*/

(function () {
    'use strict';

    describe('is/isDate', function () {
        it('isDate(new Date()) should return true', function () {
            expect(isDate(new Date())).toEqual(true);
        });

        it('isDate(new Date().getTime()) should return false', function () {
            expect(isDate(new Date().getTime())).toEqual(false);
        });
    });
}());
