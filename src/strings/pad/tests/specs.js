/*global pad*/

(function () {
    'use strict';

    describe('strings/pad', function () {
        it('pad("Hello", 9, "-") should return "--Hello--"', function () {
            expect(pad('Hello', 9, '-')).toBe('--Hello--');
        });
    });
}());
