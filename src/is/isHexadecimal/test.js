/*global isHexadecimal*/

(function () {
    'use strict';

    describe('is/isHexadecimal', function () {
        it('checks if a value is hexadecimal', function () {
            expect(isHexadecimal('f5f5f5')).toEqual(true);

            expect(isHexadecimal('9c0')).toEqual(true);

            expect(isHexadecimal('something')).toEqual(false);

            expect(isHexadecimal(333)).toEqual(true);

            expect(isHexadecimal(6.6)).toEqual(false);
        });
    });
}());
