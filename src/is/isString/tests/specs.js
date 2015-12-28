/*global isString*/

(function () {
    'use strict';

    describe('objects/isString', function () {
        it('isString(\'404\') should return true', function () {
            expect(isString('404')).toEqual(true);
        });

        it('isString(404) should return false', function () {
            expect(isString(404)).toEqual(false);
        });
    });
}());