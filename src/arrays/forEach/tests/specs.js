/*global forEach*/

(function () {
    'use strict';

    describe('forEach', function () {
        var arr = ['a', 'b', 'c'];

        it('expects that the callback iterates over the array', function () {
            forEach(arr, function (item, index) {
                expect(item).toEqual(arr[index]);
            });
        });

        it('expects the items of the array to be of type "string"', function () {
            forEach(arr, function (item) {
                expect(typeof item).toBe('string');
            });
        });
    });
}());