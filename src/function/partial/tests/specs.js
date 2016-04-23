/*global partial*/

(function () {
    'use strict';

    describe('Function/partial', function () {
        function add() {
            var args = Array.prototype.slice.call(arguments);
            return args.reduce(function (accum, val) {
                return accum + val;
            }, 0);
        }

        var addOne = partial(add, 1);

        it('should return a new function with one or more arguments partially applied', function () {
            expect(addOne(2)).toEqual(3);
            expect(addOne(2, 3)).toEqual(6);
            expect(addOne(9, 1, 4)).toEqual(15);
        });
    });
}());
