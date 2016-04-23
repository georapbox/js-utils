/*global findIndex*/

(function () {
    'use strict';

    describe('Array/findIndex', function () {
        var arr = ['a', 'b', 'c', 'd', 'e'];

        it('index of "b" should be 1 in array [\'a\', \'b\', \'c\', \'d\', \'e\']', function () {
            expect(findIndex(arr, function (chr) {
                return chr === 'b';
            })).toBe(1);
        });

        it('index of "Hello" should be -1 in array [\'a\', \'b\', \'c\', \'d\', \'e\']', function () {
            expect(findIndex(arr, function (chr) {
                return chr === 'Hello';
            })).toBe(-1);
        });
    });
}());
