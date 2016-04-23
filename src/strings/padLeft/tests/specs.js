/*global padLeft*/

(function () {
    'use strict';

    describe('String/padLeft', function () {
        it('padLeft("Hello", 10, "-") should return "-----Hello"', function () {
            expect(padLeft('Hello', 10, '-')).toBe('-----Hello');
        });
    });
}());
