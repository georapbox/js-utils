/*global flattenDeep*/

(function () {
    'use strict';

    describe('Array/flattenDeep', function () {
        it('flattens an array recursively', function () {
            expect(flattenDeep([1, [2, [3, [4]], 5], [6]])).toEqual([1, 2, 3, 4, 5, 6]);

            function dummy() {
                var arr = [1, [2, [3, [4]], 5]];
                arr.push(arguments);
                arr.push({foo: 'bar', length: 23});
                return arr;
            }

            expect(flattenDeep(dummy('a', 'b')))
                .toEqual([1, 2, 3, 4, 5, 'a', 'b', {foo: 'bar', length: 23}]);
        });
    });
}());
