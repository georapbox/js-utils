/*global isDate*/

(function () {
    'use strict';

    describe('is/isDate', function () {
        it('checks if a value is Date object', function () {
            expect(isDate(new Date())).toEqual(true);

            expect(isDate(new Date().getTime())).toEqual(false);
        });
    });
}());
