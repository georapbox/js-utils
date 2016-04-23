/*global collapseWhitespace*/

(function () {
    'use strict';

    describe('String/collapseWhitespace', function () {
        it('Converts all adjacent whitespace characters to a single space.', function () {
            expect(collapseWhitespace('  Lorem   \t ispum dolor sit      \t amet.  '))
                .toEqual('Lorem ispum dolor sit amet.');
        });
    });
}());
