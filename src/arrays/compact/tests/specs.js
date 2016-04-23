/*global compact*/

(function () {
    'use strict';

    describe('Array/compact', function () {
        var arr = [0, 1, false, 2, '', 3, null];

        it('tracks all the arguments of its calls', function () {
            spyOn(window, 'compact');
            compact(arr);
            expect(window.compact).toHaveBeenCalledWith(arr);
        });

        it('expects the values of the result array to be truthy', function () {
            var ca = compact(arr);
            for (var i = 0, l = ca.length; i < l; i++) {
                expect(ca[i]).toBeTruthy();
            }
        });
    });
}());
