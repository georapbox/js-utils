/*global padRight*/

(function () {
    'use strict';

    describe('strings/padRight', function () {
        it('padRight("Hello", 10, "-") should return "Hello-----"', function () {
            expect(padRight('Hello', 10, '-')).toBe('Hello-----');
        });
    });
}());
