/*global removePrefix*/

(function () {
    'use strict';

    describe('String/removePrefix', function () {
        it('removes a specific prefix from string', function () {
            expect(removePrefix('Hello world!', 'Hello ')).toEqual('world!');

            expect(removePrefix('Hello world!', 'world')).toEqual('Hello world!');

            expect(removePrefix('__foobar')).toEqual('__foobar');

            expect(function () {
                return removePrefix('Hello world!', {});
            }).toThrow();
        });
    });
}());
