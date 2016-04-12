/*global isEmpty*/

(function () {
    'use strict';

    describe('is/isEmpty', function () {
        it('isEmpty([]) should return true', function () {
            expect(isEmpty([])).toBe(true);
        });

        it('isEmpty(\'\') should return true', function () {
            expect(isEmpty('')).toBe(true);
        });

        it('isEmpty({}) should return true', function () {
            expect(isEmpty({})).toBe(true);
        });

        it('isEmpty([\'a\', \'b\']) should return false', function () {
            expect(isEmpty(['a', 'b'])).toBe(false);
        });

        it('isEmpty(\'Lorem ipsum dolor sit amet\') should return false', function () {
            expect(isEmpty('Lorem ipsum dolor sit amet')).toBe(false);
        });

        it('isEmpty({ a: \'a\', b: \'b\' }) should return false', function () {
            expect(isEmpty({a: 'a', b: 'b'})).toBe(false);
        });

        it('should return true for non enumerable property', function () {
            var obj = {};
            Object.defineProperty(obj, 'hidden', {
                value: null,
                enumerable: false
            });
            expect(isEmpty(obj)).toBe(true);
        });

        it('should return false for properties inherited from prototypes', function () {
            expect(isEmpty(Object.create({foo: 'bar'}))).toBe(false);
        });
    });
}());
