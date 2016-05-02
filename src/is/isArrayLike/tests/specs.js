/*global isArrayLike*/

(function () {
    'use strict';

    describe('is/isArrayLike', function () {
        it('check if value is array-like', function () {
            function noop() {}

            function dummy(a, b) {
                expect(isArrayLike(arguments)).toBe(true);
            }

            dummy();

            expect(isArrayLike([1, 2, 3])).toBe(true);

            expect(isArrayLike('abc')).toBe(true);

            expect(isArrayLike(noop)).toBe(false);

            expect(isArrayLike(null)).toBe(false);

            expect(isArrayLike()).toBe(false);
        });
    });
}());
