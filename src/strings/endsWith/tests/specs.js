/*global endsWith*/

(function () {
    'use strict';

    describe('String/endsWith', function () {
        it('String should end with specified search string', function () {
            expect(endsWith('To be, or not to be, that is the question.', 'question.')).toBe(true);
            expect(endsWith('To be, or not to be, that is the question.', 'question')).toBe(false);
            expect(endsWith('To be, or not to be, that is the question.', 'to be', 19)).toBe(true);
        });
    });
}());
