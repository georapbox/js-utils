/*global isFunction*/

(function () {
    'use strict';

    describe('is/isFunction', function () {
        it('checks if a value is function', function () {
            expect(isFunction(function test() {})).toEqual(true);

            expect(isFunction({foo: 'bar'})).toEqual(false);
        });
    });
}());
