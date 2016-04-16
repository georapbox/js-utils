/*global reverse*/

(function () {
    'use strict';

    describe('arrays/reverse', function () {
        it('should return a new reversed array', function () {
            var numbers = [1, 2, 3],
                revNumbers = reverse(numbers);

            expect(numbers).toEqual([1, 2, 3]);
            expect(revNumbers).toEqual([3, 2, 1]);
        });
    });
}());
