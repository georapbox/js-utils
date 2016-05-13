/*global isPlainObject*/

(function () {
    'use strict';

    describe('is/isPlainObject', function () {
        function Foo() {
            this.foo = 'bar';
        }

        it('isPlainObject({foo: \'bar\'}) should return true', function () {
            expect(isPlainObject({foo: 'bar'})).toBe(true);
        });

        it('isPlainObject(Object.create({})) should return true', function () {
            expect(isPlainObject(Object.create({}))).toBe(true);
        });

        it('isPlainObject(Object.create(null)) should return true', function () {
            expect(isPlainObject(Object.create(null))).toBe(true);
        });

        it('isPlainObject(Object.create({foo: \'bar\'})) should return true', function () {
            expect(isPlainObject(Object.create({foo: 'bar'}))).toBe(true);
        });

        it('isPlainObject(new Foo()) should return false', function () {
            expect(isPlainObject(new Foo())).toBe(false);
        });

        it('isPlainObject([1, 2, 3]) should return false', function () {
            expect(isPlainObject([1, 2, 3])).toBe(false);
        });

        it('isPlainObject(null) should return false', function () {
            expect(isPlainObject(null)).toBe(false);
        });

        it('isPlainObject() should return false', function () {
            expect(isPlainObject()).toBe(false);
        });

        it('isPlainObject(new Object({foo: \'bar\'})) should return true', function () {
            expect(isPlainObject(new Object({foo: 'bar'}))).toBe(true);
        });

        it('isPlainObject(100) should return false', function () {
            expect(isPlainObject(100)).toBe(false);
        });

        it('isPlainObject("lorem ipsum") should return false', function () {
            expect(isPlainObject('lorem ipsum')).toBe(false);
        });
    });
}());
