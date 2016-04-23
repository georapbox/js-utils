/*global randomString*/

(function () {
    'use strict';

    describe('String/randomString', function () {
        it('generates a random string of 10 characters', function () {
            expect(randomString(10).length).toEqual(10);
        });

        it('generates a random string of 0 characters if both arguments omitted', function () {
            expect(randomString().length).toEqual(0);
        });
    });
}());
