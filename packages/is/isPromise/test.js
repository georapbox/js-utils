const isPromise = require('./isPromise');

describe('is/isPromise', () => {
  it('checks if a value is a Promise', () => {
    const noop = () => void 0;
    const p1 = new Promise(noop, noop);
    const p2 = Promise.resolve('Success');
    const p3 = Promise.reject('Error').catch(noop);

    expect(isPromise(p1)).toBe(true);
    expect(isPromise(p2)).toBe(true);
    expect(isPromise(p3)).toBe(true);

    expect(isPromise(Promise)).toBe(false);
    expect(isPromise(Promise.resolve)).toBe(false);
    expect(isPromise(Promise.reject)).toBe(false);
    expect(isPromise(null)).toBe(false);
    expect(isPromise(undefined)).toBe(false);
    expect(isPromise({})).toBe(false);
    expect(isPromise([])).toBe(false);
    expect(isPromise(NaN)).toBe(false);
    expect(isPromise(true)).toBe(false);
    expect(isPromise(new Map())).toBe(false);
    expect(isPromise(new Set())).toBe(false);
    expect(isPromise(Symbol('Promise'))).toBe(false);
    expect(isPromise(() => {
      return Promise.resolve('Success');
    })).toBe(false);

    const fp1 = {
      get [Symbol.toStringTag]() {
        return 'Promise';
      }
    };

    const fp2 = {
      get [Symbol.toStringTag]() {
        return 'Promise';
      },
      then() {},
      catch() {}
    };

    expect(isPromise(fp1)).toBe(false);
    expect(isPromise(fp2)).toBe(true); // False positive, but let's accept it :)
  });
});
