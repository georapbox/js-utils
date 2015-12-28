/*global isArray*/

(function () {
    'use strict';

    describe('objects/isArray', function () {
        it('isArray([\'a\', \'b\', \'c\', \'d\']) should return true', function () {
            expect(isArray(['a', 'b', 'c', 'd'])).toBe(true);
        });

        it('isArray({ a: \'a\', b: \'b\' }) should return false', function () {
            expect(isArray({ a: 'a', b: 'b' })).toBe(false);
        });
    });
}());