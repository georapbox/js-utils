/*global isExisty*/

(function () {
    'use strict';

    describe('is/isExisty', function () {
        it('checks if a value is existy', function () {
            expect(isExisty()).toBe(false);

            expect(isExisty('Foo')).toBe(true);

            expect(isExisty(null)).toBe(false);
        });
    });
}());
