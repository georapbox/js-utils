/*global trimLeft*/

(function () {
    'use strict';

    describe('strings/trimLeft', function () {
        it('trimLeft("     Hey") should have length 3', function () {
            expect(trimLeft('    Hey').length).toEqual(3);
        });
    });
}());
