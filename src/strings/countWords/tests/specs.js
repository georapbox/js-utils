/*global countWords*/

(function () {
    'use strict';

    describe('String/countWords', function () {
        it('should count words in a subject string', function () {
            expect(function () {
                return countWords({});
            }).toThrow();

            expect(countWords('')).toEqual(0);

            expect(countWords('Hello world!        \n This is a message     from outter\tspace.'))
                .toEqual(9);
        });
    });
}());
