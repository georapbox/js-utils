/*global subStrBeforeChars*/

(function () {
    'use strict';

    describe('String/subStrBeforeChars', function () {
        it('With string "LOREM_IPSUM DOLOR_SIT AMET", The substring before the first occurence of "SIT", should be "LOREM_IPSUM DOLOR_SIT"', function () {
            expect(subStrBeforeChars('LOREM_IPSUM DOLOR_SIT AMET', 'SIT'))
                .toBe('LOREM_IPSUM DOLOR_');
        });

        it('With string "LOREM_IPSUM DOLOR_SIT AMET", the substring before the last occurence of "_" should be "LOREM_IPSUM DOLOR_"', function () {
            expect(subStrBeforeChars('LOREM_IPSUM DOLOR_SIT AMET', '_', true))
                .toBe('LOREM_IPSUM DOLOR');
        });

        it('Expect to return the initial string if we provide less arguments than needed.', function () {
            expect(subStrBeforeChars('LOREM_IPSUM DOLOR_SIT AMET'))
                .toBe('LOREM_IPSUM DOLOR_SIT AMET');
        });
    });
}());
