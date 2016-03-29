/*global trimRight*/

(function () {
    'use strict';

    describe('strings/trimRight', function () {
        it('trimRight("Hello    ") should have length 5', function () {
            expect(trimRight('Hello    ').length).toEqual(5);
        });
    });
}());
