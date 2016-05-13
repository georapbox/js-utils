/*global startsWith*/

(function () {
    'use strict';

    describe('String/startsWith', function () {
        it('"Hello world!" starts with "Hello" is true', function () {
            expect(startsWith('Hello world', 'Hello')).toEqual(true);
        });

        it('"Hello world!" starts with "world" is false', function () {
            expect(startsWith('Hello world', 'world')).toEqual(false);
        });

        it('"Hello world!" starts with "ello" at index 1 is true', function () {
            expect(startsWith('Hello world', 'ello', 1)).toEqual(true);
        });
    });
}());
