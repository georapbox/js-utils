/*global trim, trimLeft, trimRight*/

(function () {
    'use strict';

    describe('strings/trim', function () {
        it('trim("     Hello    ") should have length 5', function () {
            expect(trim('    Hello   ').length).toEqual(5);
        });
    });

    describe('strings/trimLeft', function () {
        it('trimLeft("     Hey") should have length 3', function () {
            expect(trimLeft('    Hey').length).toEqual(3);
        });
    });

    describe('strings/trimRight', function () {
        it('trimRight("Hello    ") should have length 5', function () {
            expect(trimRight('Hello    ').length).toEqual(5);
        });
    });
}());