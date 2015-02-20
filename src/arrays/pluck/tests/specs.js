/*global pluck*/

(function () {
    'use strict';

    describe('arrays/pluck', function () {
		var books = [
			{ title: 'Around the World in Eighty Days', author: 'Jules Verne' },
			{ title: 'The Mist', author: 'Stephen King' },
			{ title: 'Journey to the Center of the Earth', author: 'Jules Verne' },
			{ title: 'The Monster in the Closet', author: 'Stephen King' }
		];

		it('should return an array', function () {
			expect(Object.prototype.toString.call(pluck(books, 'author'))).toBe('[object Array]');
		});

		it('length of the returned array should be 4', function () {
            expect(pluck(books, 'author').length).toBe(4);
        });

		it('the result array should contain "Jules Verne" and "Stephen King"', function () {
			expect(pluck(books, 'author').indexOf('Jules Verne')).toBeGreaterThan(-1);
			expect(pluck(books, 'author').indexOf('Stephen King')).toBeGreaterThan(-1);
		});
    });
}());