const cookie = require('./cookie');

describe('dom/cookie', () => {
  it('should create, read and delete cookies', () => {
    cookie.set('cookie-1', 'value-1');
    expect(cookie.get('cookie-1')).toBe('value-1');

    cookie.set('cookie-2', 'val ue-2');
    expect(cookie.get('cookie-2')).toBe('val ue-2');

    cookie.set('cookie-3', 'val;ue-3');
    expect(cookie.get('cookie-3')).toBe('val;ue-3');

    cookie.set('cookie-4', 'val,ue-4');
    expect(cookie.get('cookie-4')).toBe('val,ue-4');

    cookie.set('cookie-5', 'val\tue-5');
    expect(cookie.get('cookie-5')).toBe('val\tue-5');

    cookie.set('cookie-6', 'val\nue-6');
    expect(cookie.get('cookie-6')).toBe('val\nue-6');

    expect(document.cookie).toBe('cookie-1=value-1; cookie-2=val%20ue-2; cookie-3=val%3Bue-3; cookie-4=val%2Cue-4; cookie-5=val%09ue-5; cookie-6=val%0Aue-6');

    expect(decodeURIComponent(document.cookie)).toBe('cookie-1=value-1; cookie-2=val ue-2; cookie-3=val;ue-3; cookie-4=val,ue-4; cookie-5=val\tue-5; cookie-6=val\nue-6');

    cookie.remove('cookie-1');
    expect(cookie.get('cookie-1')).toBe('');

    cookie.remove('cookie-2');
    expect(cookie.get('cookie-2')).toBe('');

    cookie.remove('cookie-3');
    expect(cookie.get('cookie-3')).toBe('');

    cookie.remove('cookie-4');
    expect(cookie.get('cookie-4')).toBe('');

    cookie.remove('cookie-5');
    expect(cookie.get('cookie-5')).toBe('');

    cookie.remove('cookie-6');
    expect(cookie.get('cookie-6')).toBe('');

    expect(document.cookie).toBe('');

    expect(() => {
      return cookie.set(null, 'value');
    }).toThrow(new TypeError('Expected a string for first and second argument'));

    expect(() => {
      return cookie.set('name', null);
    }).toThrow(new TypeError('Expected a string for first and second argument'));

    expect(() => {
      return cookie.get(null);
    }).toThrow(new TypeError('Expected a string for first argument'));

    expect(() => {
      return cookie.remove(null);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
