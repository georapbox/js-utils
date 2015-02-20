/*global diff*/

(function () {
    'use strict';

    describe('arrays/diff', function () {
        var a = [1, 2, 3, 4, {}],
            b = [5, 2, 10];

        it('tracks all the arguments of its calls', function () {
            spyOn(window, 'diff');
            diff(a, b);
            expect(window.diff).toHaveBeenCalledWith(a, b);
        });

        it('expects the result array to be "[1, 3, 4, {}]"', function () {
            expect(diff(a, b)).toEqual([1, 3, 4, {}]);
        });
    });
}());