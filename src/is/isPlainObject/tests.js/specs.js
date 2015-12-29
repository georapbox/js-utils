/*global isPlainObject*/

(function () {
    'use strict';

    describe('is/isPlainObject', function () {
        function Foo() {
            this.foo = 'bar';
        }

        it('isPlainObject({foo: \'bar\'}) should return true', function () {
            expect(isPlainObject({foo: 'bar'})).toEqual(true);
        });

        it('isPlainObject(Object.create({})) should return true', function () {
            expect(isPlainObject(Object.create({}))).toEqual(true);
        });

        it('isPlainObject(new Foo()) should return false', function () {
            expect(isPlainObject(new Foo())).toEqual(false);
        });

        it('isPlainObject(Object.create(null)) should return false', function () {
            expect(isPlainObject(Object.create(null))).toEqual(false);
        });

        it('isPlainObject([1, 2, 3]) should return false', function () {
            expect(isPlainObject([1, 2, 3])).toEqual(false);
        });
    });
}());
