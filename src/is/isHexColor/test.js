/*global isHexColor*/

(function () {
    'use strict';

    describe('is/isHexColor', function () {
        it('isHexColor("#f5f5f5") should return true', function () {
            expect(isHexColor('#f5f5f5')).toEqual(true);
        });

        it('isHexColor("#9c0") should return true', function () {
            expect(isHexColor('#9c0')).toEqual(true);
        });

        it('isHexColor("something") should return false', function () {
            expect(isHexColor('something')).toEqual(false);
        });

        it('isHexColor(333) should return true', function () {
            expect(isHexColor(333)).toEqual(true);
        });

        it('isHexColor("333") should return true', function () {
            expect(isHexColor('333')).toEqual(true);
        });

        it('isHexColor(6.6) should return false', function () {
            expect(isHexColor(6.6)).toEqual(false);
        });

        it('isHexColor() should return false', function () {
            expect(isHexColor()).toEqual(false);
        });

        it('isHexColor(null) should return false', function () {
            expect(isHexColor(null)).toEqual(false);
        });
    });
}());
