/* global insert */

(function () {
    'use strict';

    describe('Array/insert', function () {
        it('inserts elements to array at specific index', function () {
            var arr = [1, 2, 3, ['x', 'y']];

            expect(insert(arr, 0, 'a')).toEqual(['a', 1, 2, 3, ['x', 'y']]);

            expect(insert(arr, 2, 'b')).toEqual([1, 2, 'b', 3, ['x', 'y']]);

            expect(insert(arr, -1, 'c')).toEqual([1, 2, 3, 'c', ['x', 'y']]);

            expect(insert(arr, 10, 'd')).toEqual([1, 2, 3, ['x', 'y'], 'd']);

            expect(insert(arr, 2)).toEqual([1, 2, 3, ['x', 'y']]);

            expect(insert(arr, 2, undefined)).toEqual([1, 2, undefined, 3, ['x', 'y']]);

            expect(insert(arr)).toEqual([1, 2, 3, ['x', 'y']]);

            expect(function () {
                return insert({foo: 'bar'}, 0, 'e');
            }).toThrow();
        });
    });
}());
