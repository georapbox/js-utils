/*global chompLeft*/

(function () {
    'use strict';

    describe('strings/chompLeft', function () {
        it('chompLeft(\'Hello world!\', \'Hello \') should return "world!"', function () {
            expect(chompLeft('Hello world!', 'Hello ')).toEqual('world!');
        });

        it('chompLeft(\'Hello world!\', \'world \') should return "Hello world!"', function () {
            expect(chompLeft('Hello world!', 'world')).toEqual('Hello world!');
        });

        it('chompLeft(\'Hello world!\') should return "Hello world!"', function () {
            expect(chompLeft('Hello world!')).toEqual('Hello world!');
        });
    });
}());
