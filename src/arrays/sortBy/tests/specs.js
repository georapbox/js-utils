/* global sortBy */

(function () {
    'use strict';

    describe('Array/sortBy', function () {
        var people = [
            {name: 'Elena', age: '2'},
            {name: 'George', age: '33'},
            {name: 'Vasiliki', age: '32'},
            {name: 'Vaggelis', age: '30'}
        ];

        it('should sort people array by property name in ascending order', function () {
            expect(sortBy(people, 'name')).toEqual([
                {name: 'Elena', age: '2'},
                {name: 'George', age: '33'},
                {name: 'Vaggelis', age: '30'},
                {name: 'Vasiliki', age: '32'}
            ]);
        });

        it('should sort people array by property name in descending order', function () {
            expect(sortBy(people, 'name', false)).toEqual([
                {name: 'Vasiliki', age: '32'},
                {name: 'Vaggelis', age: '30'},
                {name: 'George', age: '33'},
                {name: 'Elena', age: '2'}
            ]);
        });

        it('should sort people array by property age in ascending order manipulating the age property', function () {
            expect(sortBy(people, 'age', true, function (age) {
                return age * 2;
            })).toEqual([
                {name: 'Elena', age: '2'},
                {name: 'Vaggelis', age: '30'},
                {name: 'Vasiliki', age: '32'},
                {name: 'George', age: '33'}
            ]);
        });
    });
}());
