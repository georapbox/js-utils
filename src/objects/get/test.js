/* global get */

(function () {
  'use strict';

  describe('Object/get', function () {
    it('Gets the value at path of object. If the resolved value is undefined, the "defaultValue" is returned in its place.', function () {
      var object = {
        'a': [{
            'b': {
              'c': 3
            }
        }]
      };

      expect(get(object, 'a.0.b.c')).toBe(3);
      expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);

      expect(get(object, 'a.b.c')).toBe(undefined);
      expect(get(object, ['a', 'b', 'c'])).toBe(undefined);

      expect(get(object, 'a.b.c', 'DEFAULT')).toBe('DEFAULT');
      expect(get(object, ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

      expect(get(null, 'a.b.c', 'DEFAULT')).toBe('DEFAULT');
      expect(get(null, ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

      expect(get(undefined, 'a.b.c', 'DEFAULT')).toBe('DEFAULT');
      expect(get(undefined, ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

      expect(get(1, 'a.b.c', 'DEFAULT')).toBe('DEFAULT');
      expect(get(1, ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');

      expect(get('string', 'a.b.c', 'DEFAULT')).toBe('DEFAULT');
      expect(get('string', ['a', 'b', 'c'], 'DEFAULT')).toBe('DEFAULT');
    });
  });
}());
