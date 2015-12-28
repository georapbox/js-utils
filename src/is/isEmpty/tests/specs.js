/*global isEmpty*/

(function () {
    'use strict';

    describe('objects/isEmpty', function () {
        it('isEmpty([]) should return true', function () {
            expect(isEmpty([])).toEqual(true);
        });

        it('isEmpty(\'\') should return true', function () {
            expect(isEmpty('')).toEqual(true);
        });

        it('isEmpty({}) should return true', function () {
            expect(isEmpty({})).toEqual(true);
        });

        it('isEmpty([\'a\', \'b\']) should return false', function () {
            expect(isEmpty(['a', 'b'])).toEqual(false);
        });

        it('isEmpty(\'Lorem ipsum dolor sit amet\') should return false', function () {
            expect(isEmpty('Lorem ipsum dolor sit amet')).toEqual(false);
        });

        it('isEmpty({ a: \'a\', b: \'b\' }) should return false', function () {
            expect(isEmpty({ a: 'a', b: 'b' })).toEqual(false);
        });
    });
}());