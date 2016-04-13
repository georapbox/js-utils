/* global sort */

(function () {
    'use strict';

    describe('arrays/sort', function () {
        var numbers = [1, 2, 3, 10, 4, 9],
            drinks = ['martini', 'coffee', 'wine', 'tequila'];

        it('should sort numbers in ascending order', function () {
            expect(sort(numbers)).toEqual([1, 2, 3, 4, 9, 10]);
        });

        it('should sort numbers in descending order', function () {
            expect(sort(numbers, false)).toEqual([10, 9, 4, 3, 2, 1]);
        });

        it('should sort strings in ascending order', function () {
            expect(sort(drinks)).toEqual(['coffee', 'martini', 'tequila', 'wine']);
        });

        it('should sort strings in descending order', function () {
            expect(sort(drinks, false)).toEqual(['wine', 'tequila', 'martini', 'coffee']);
        });
    });
}());
