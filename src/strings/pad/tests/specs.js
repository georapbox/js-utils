/*global pad, padLeft, padRight*/

(function () {
    'use strict';

    describe('strings/pad', function () {
        it('pad("Hello", 9, "-") should return "--Hello--"', function () {
            expect(pad('Hello', 9, '-')).toBe('--Hello--');
        });
    });

    describe('strings/padLeft', function () {
        it('padLeft("Hello", 10, "-") should return "-----Hello"', function () {
            expect(padLeft('Hello', 10, '-')).toBe('-----Hello');
        });
    });

    describe('strings/padRight', function () {
        it('padRight("Hello", 10, "-") should return "Hello-----"', function () {
            expect(padRight('Hello', 10, '-')).toBe('Hello-----');
        });
    });
}());