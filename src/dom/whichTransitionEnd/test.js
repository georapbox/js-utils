/*global whichTransitionEnd*/

(function () {
    'use strict';

    describe('dom/whichTransitionEnd', function () {
        it('returns the transition end event name', function () {
            var values = ['transitionend', 'oTransitionEnd', 'webkitTransitionEnd', undefined];
            var exists = values.indexOf(whichTransitionEnd()) !== -1;

            expect(exists).toBe(true);
        });
    });
}());
