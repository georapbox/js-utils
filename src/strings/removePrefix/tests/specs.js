/*global removePrefix*/

(function () {
    'use strict';

    describe('strings/removePrefix', function () {
        it('removePrefix(\'Hello world!\', \'Hello \') should return "world!"', function () {
            expect(removePrefix('Hello world!', 'Hello ')).toEqual('world!');
        });

        it('removePrefix(\'Hello world!\', \'world \') should return "Hello world!"', function () {
            expect(removePrefix('Hello world!', 'world')).toEqual('Hello world!');
        });

        it('removePrefix(\'Hello world!\') should return "Hello world!"', function () {
            expect(removePrefix('Hello world!')).toEqual('Hello world!');
        });
    });
}());
