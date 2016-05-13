/*global repeat*/

(function () {
    'use strict';

    describe('String/repeat', function () {
        it('should repeat a string n times', function () {
            expect(repeat('&nbsp;', 3)).toBe('&nbsp;&nbsp;&nbsp;');

            expect(repeat('&nbsp;', 3.8)).toBe('&nbsp;&nbsp;&nbsp;');

            expect(repeat('&nbsp;', 0)).toBe('');

            expect(repeat('&nbsp;', -2)).toBe('');

            expect(repeat('&nbsp;')).toBe('');

            expect(repeat('&nbsp;', null)).toBe('');

            expect(repeat('&nbsp;', Infinity)).toBe('');

            expect(repeat('&nbsp;', -Infinity)).toBe('');

            expect(repeat('&nbsp;', NaN)).toBe('');
        });
    });
}());
