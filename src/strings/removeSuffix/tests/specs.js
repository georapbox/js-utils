/*global removeSuffix*/

(function () {
    'use strict';

    describe('String/removeSuffix', function () {
        it('removeSuffix(\'Hello world!\', \'world!\') should return "Hello "', function () {
            expect(removeSuffix('Hello world!', 'world!')).toEqual('Hello ');
        });

        it('removeSuffix(\'Hello world!\', \'Hello\') should return "Hello world!"', function () {
            expect(removeSuffix('Hello world!', 'Hello')).toEqual('Hello world!');
        });
    });
}());
