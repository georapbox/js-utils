/*global uniq*/

(function () {
    'use strict';

    describe('Array/uniq', function () {
        var arr = ['a', 'a', 'b', true, '2', 2, false, true];

        it('should contain only one occurence of "a"', function () {
            var uArr = uniq(arr),
                count = 0;

            for (var i = 0, len = arr.length; i < len; i++) {
                if (uArr[i] === 'a') {
                    count += 1;
                }
            }

            expect(count).toEqual(1);
        });
    });
}());
