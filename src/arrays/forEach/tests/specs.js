/*global forEach*/

(function () {
    'use strict';

    describe('Array/forEach', function () {
        var arr = ['a', 'b', 'c'];

        it('expects that the callback iterates over the array', function () {
            forEach(arr, function (item, index) {
                expect(item).toEqual(arr[index]);
            });

            expect(function () {
                forEach({}, function (item, index) {
                    expect(item).toEqual(arr[index]);
                });
            }).toThrow();

            expect(function () {
                forEach(arr);
            }).toThrow();
        });
    });
}());
