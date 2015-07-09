/*global chompRight*/

(function () {
    'use strict';

    describe('strings/chompRight', function () {
        it('chompRight(\'Hello world!\', \'world!\') should return "Hello "', function () {
            expect(chompRight('Hello world!', 'world!')).toEqual('Hello ');
        });

        it('chompRight(\'Hello world!\', \'Hello\') should return "Hello world!"', function () {
            expect(chompRight('Hello world!', 'Hello')).toEqual('Hello world!');
        });

        it('chompRight(\'Hello world!\') should return "Hello world!"', function () {
            expect(chompRight('Hello world!')).toEqual('Hello world!');
        });
    });
}());
