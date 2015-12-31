/*global isHexadecimal*/

(function () {
    'use strict';

    describe('is/isHexadecimal', function () {
        it('isHexadecimal("f5f5f5") should return true', function () {
            expect(isHexadecimal('f5f5f5')).toEqual(true);
        });

        it('isHexadecimal("9c0") should return true', function () {
            expect(isHexadecimal('9c0')).toEqual(true);
        });

        it('isHexadecimal("something") should return false', function () {
            expect(isHexadecimal('something')).toEqual(false);
        });

        it('isHexadecimal(333) should return true', function () {
            expect(isHexadecimal(333)).toEqual(true);
        });

        it('isHexadecimal(6.6) should return false', function () {
            expect(isHexadecimal(6.6)).toEqual(false);
        });
    });
}());
