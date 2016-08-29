/* global radiansToDegrees */

(function () {
    'use strict';

    describe('Math/radiansToDegrees', function () {
        it('converts radians to degrees', function () {
            expect(radiansToDegrees(0)).toEqual(0);

            expect(radiansToDegrees(Math.PI / 2)).toEqual(90);

            expect(radiansToDegrees(Math.PI)).toEqual(180);

            expect(radiansToDegrees(3 * Math.PI / 2)).toEqual(270);

            expect(radiansToDegrees(2 * Math.PI)).toEqual(360);

            expect(radiansToDegrees(NaN)).toEqual(NaN);

            expect(function () {
                return radiansToDegrees('3.14');
            }).toThrow();
        });
    });
}());
