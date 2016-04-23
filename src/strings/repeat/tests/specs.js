/*global repeat*/

(function () {
    'use strict';

    describe('String/repeat', function () {
        it('repeat(\'&nbsp; \', 3) should return \'&nbsp;&nbsp;&nbsp;\'', function () {
            expect(repeat('&nbsp;', 3)).toBe('&nbsp;&nbsp;&nbsp;');
        });

        it('repeat(\'&nbsp; \') should return ""', function () {
            expect(repeat('&nbsp;')).toBe('');
        });
    });
}());
