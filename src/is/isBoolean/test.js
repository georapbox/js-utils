/*global isBoolean*/

(function () {
    'use strict';

    describe('is/isBoolean', function () {
        it('checks if a value is boolean', function () {
            expect(isBoolean(true)).toBe(true);
            
            expect(isBoolean(100)).toBe(false);
        });
    });
}());
