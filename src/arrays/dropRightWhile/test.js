/* global dropRightWhile */

(function () {
    'use strict';

    describe('Array/dropRightWhile', function () {
        it('creates a slice of `array` excluding elements dropped from the beginning, until `predicate` returns falsy', function () {
            var books = [
                {title: 'Javascript Design Patterns', read: false},
                {title: 'Programming Javascript Applications', read: true},
                {title: 'JavaScript The Good Parts', read: false},
                {title: 'Eloquent Javascript', read: false}
            ];

            expect(dropRightWhile(books, function (book) {
                return !book.read;
            })).toEqual([
                {title: 'Javascript Design Patterns', read: false},
                {title: 'Programming Javascript Applications', read: true}
            ]);

            expect(dropRightWhile(books, function (book) {
                return book.read;
            }).length).toEqual(4);

            expect(dropRightWhile(books).length).toEqual(4);
        });
    });
}());
