/*global isElement*/

(function () {
    'use strict';

    describe('is/isElement', function () {
        it('isElement(isElement(document.getElementsByTagName(\'head\')[0]) should return true', function () {
            expect(isElement(document.getElementsByTagName('head')[0])).toEqual(true);
        });

        it('isElement(\'Lorem\') should return false', function () {
            expect(isElement('Lorem')).toEqual(false);
        });
    });
}());
