/*global filter*/

(function () {
    'use strict';

    describe('arrays/filter', function () {
        var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];

        it('expects the return value to be "[{a: \'b\'}]"', function () {
            var f = filter(arr, function (item, index) {
                return item.a === 'b';
            });
            expect(f).toEqual([{a: 'b'}]);
        });

        it('expects the return value to be an array', function () {
            var f = filter(arr, function (item, index) {
                return item === 1;
            });
            expect(Object.prototype.toString.call(f)).toBe('[object Array]');
        });
    });
}());