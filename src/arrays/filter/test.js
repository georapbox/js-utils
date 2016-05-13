/*global filter*/

(function () {
    'use strict';

    describe('Array/filter', function () {
        var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];

        it('filters an array', function () {
            var res_a = filter(arr, function (item) {
                return item.a === 'b';
            });

            var res_b = filter(arr, function (item) {
                return item === 1;
            });

            expect(res_a).toEqual([{a: 'b'}]);

            expect(res_b).toEqual([1]);

            expect(function () {
                return filter({}, function (item) {
                    return item === 'foo';
                });
            }).toThrow();
        });
    });
}());
