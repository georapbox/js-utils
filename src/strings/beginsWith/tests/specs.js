/*global beginsWith*/

(function () {
    'use strict';

    describe('strings/beginsWith', function () {
        it('"Hello world!" begins with "Hello" is true', function () {
            expect(beginsWith('Hello world', 'Hello')).toEqual(true);
        });

        it('"Hello world!" begins with "world" is false', function () {
            expect(beginsWith('Hello world', 'world')).toEqual(false);
        });
    });
}());