/* global clamp */

(function () {
    'use strict';

    describe('Number/clamp', function () {
        it('clamps number within the inclusive lower and upper bounds', function () {
            expect(clamp(10, -5, 5)).toEqual(5);

            expect(clamp(-10, -5, 5)).toEqual(-5);

            expect(clamp(10, -5)).toEqual(-5);

            expect(clamp(10, 5)).toEqual(5);

            expect(clamp(3, 4, 5)).toEqual(4);

            expect(clamp(10, NaN, NaN)).toEqual(0);

            expect(function () {
                return clamp(10, '-5', '5');
            }).toThrow();
        });
    });
}());
