/* global camelize */

(function () {
    'use strict';

    describe('String/camelize', function () {
        it('should convert a string into camel casing, removing "underscores", "dashes" or spaces', function () {
            expect(camelize('hello_world')).toEqual('helloWorld');

            expect(camelize('-moz-animation')).toEqual('MozAnimation');

            expect(camelize('lorem ipsum', true)).toEqual('loremIpsum');

            expect(camelize('lorem ipsum')).toEqual('lorem ipsum');

            expect(function () {
                return camelize({});
            }).toThrow();
        });
    });
}());
