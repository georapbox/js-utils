var classnames = require('./classnames');

describe('String/classnames', function () {
  it('returns empty string if no arguments passed', function () {
    expect(classnames()).toBe('');
  });

  it('returns empty string if empty object(s) passed as arguments', function () {
    expect(classnames({})).toBe('');
    expect(classnames({}, {}, {})).toBe('');
  });

  it('returns empty string if all arguments are empty strings', function () {
    expect(classnames('', '', '')).toBe('');
  });

  it ('should ignore arguments of unsupported types', function () {
    var res = classnames(
      'foo',
      { bar: true },
      [{ baz: true }],
      [],
      100,
      Symbol('foo-bar'),
      new WeakSet(),
      new WeakSet(),
      new Map(),
      new Set()
    );

    expect(res).toBe('foo bar');
  });

  it ('combines mixed arguments (strings, objects)', function () {
    var res = classnames(
      'a', 'b',
      { 'c': true },
      { 'd': false },
      'e', 'f'
    );

    expect(res).toBe('a b c e f');
  });

  it('it joins the classes if an object is passed with multiple keys', function () {
    var res = classnames({
      foo: true,
      bar: true
    });

    expect(res).toContain('foo');
    expect(res).toContain('bar');
  });

  it('all falsy values are ignored', function () {
    var res = classnames(
      { 'null': null },
      { 'undefined': void 0 },
      { 'empty-string': '' },
      { 'non-empty-string': 'foo' },
      { 'white-space': ' ' },
      { 'function': function () {} },
      { 'empty-object': {} },
      { 'non-empty-bject': { foo: 'bar' } },
      { 'empty-array': [] },
      { 'non-empty-array': ['foo', 'bar'] },
      { '1': 1 },
      { '0': 0 },
      { '-0': -0 },
      { 'NaN': NaN },
      { 'false': false },
      { 'true': true },
      'Yes, this is a long and strange string.',
      0,
      -0,
      false,
      null,
      void 0,
      '',
      NaN
    );

    var expected = 'non-empty-string white-space function empty-object non-empty-bject empty-array non-empty-array 1 true Yes, this is a long and strange string.';

    expect(res).toBe(expected);
  });
});
