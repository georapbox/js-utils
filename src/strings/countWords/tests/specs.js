/*global countWords*/

(function () {
    'use strict';

    describe('strings/countWords', function () {
        it('String "Hello world!        \n This is a message     from outter\tspace." has 9 words.', function () {
            expect(countWords('Hello world!        \n This is a message     from outter\tspace.')).toEqual(9);
        });
    });
}());
