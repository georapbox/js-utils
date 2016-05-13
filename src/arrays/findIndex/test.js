/*global findIndex*/

(function () {
    'use strict';

    describe('Array/findIndex', function () {
        var arr = ['a', 'b', 'c', 'd', 'e'];

        it('returns the index in the array', function () {
            expect(findIndex(arr, function (chr) {
                return chr === 'b';
            })).toBe(1);

            expect(findIndex(arr, function (chr) {
                return chr === 'Hello';
            })).toBe(-1);

            expect(function () {
                return findIndex({}, function (chr) {
                    return chr === 'b';
                });
            }).toThrow();
        });
    });
}());
