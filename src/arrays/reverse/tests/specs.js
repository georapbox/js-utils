/*global reverse*/

(function () {
    'use strict';

    describe('arrays/reverse', function () {
        var numbers = [1, 2, 3];

        it('should return the array reversed', function () {
            expect(reverse(numbers)).toEqual([3, 2, 1]);
        });
    });
}());
