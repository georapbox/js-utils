/*global subStrAfterChars*/

(function () {
    'use strict';

    describe('strings/subStrAfterChars', function () {
        it('With string "LOREM_IPSUM DOLOR_SIT AMET", The substring after the first occurence of "SIT ", should be "AMET"', function () {
            expect(subStrAfterChars('LOREM_IPSUM DOLOR_SIT AMET', 'SIT ')).toBe('AMET');
        });

        it('With string "LOREM_IPSUM DOLOR_SIT AMET", the substring after the last occurence of "_" should be "SIT AMET"', function () {
            expect(subStrAfterChars('LOREM_IPSUM DOLOR_SIT AMET', '_', true)).toBe('SIT AMET');
        });
    });
}());