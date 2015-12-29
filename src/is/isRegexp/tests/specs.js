/*global isRegexp*/

(function () {
    'use strict';

    describe('is/isRegexp', function () {
        it('isRegexp(/^[0-9a-fA-F]+$/) should return true', function () {
            expect(isRegexp(/^[0-9a-fA-F]+$/)).toBe(true);
        });

        it('isRegexp("/^[0-9a-fA-F]+$/") should return false', function () {
            expect(isRegexp("/^[0-9a-fA-F]+$/")).toBe(false);
        });

        it('isRegexp() should return false', function () {
            expect(isRegexp()).toBe(false);
        });
    });
}());
