/*global once*/

(function () {
    'use strict';

    describe('misc/once', function () {
        it('should execute a function only one time', function () {
            var num = 0;
            var canOnlyFireOnce = once(function () {
                return num += 1;
            });

            expect(canOnlyFireOnce()).toEqual(1);
            expect(canOnlyFireOnce()).toEqual(1);
        });
    });
}());
