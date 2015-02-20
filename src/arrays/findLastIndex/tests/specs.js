/*global findLastIndex*/

(function () {
    'use strict';

    describe('arrays/findLastIndex', function () {
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'E'],
			numbers = [1, 2, 3, 4];

		it('last occurence of "E" should be at index 7 in array [\'A\', \'B\', \'C\', \'D\', \'E\', \'F\', \'G\', \'E\']', function () {
            expect(findLastIndex(arr, function (chr) {
				return chr === 'E';
			})).toBe(7);
        });

		it('last occurence of a number > 10 should be at index -1 (does not exist) in array [\'1\', \'2\', \'3\', \'4\']', function () {
			expect(findLastIndex(numbers, function (chr) {
				return chr > 10;
			})).toBe(-1);
		});
    });
}());