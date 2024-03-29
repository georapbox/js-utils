const trueTypeOf = require('./trueTypeOf.js');

describe('Object/trueTypeOf', () => {
  it('determines the true type of a value', () => {
    const numVar = 1;
    const nanVar = NaN;
    const infVar = Infinity;
    const negInfVar = -Infinity;
    const bigIntVar = BigInt(9007199254740991);
    const strVar = 'string';
    const boolVar = true;
    const arrVar = [1, 2, 3];
    const objVar = { a: 1, b: 2, c: 3 };
    const funcVar = () => {};
    const dateVar = new Date();
    const regVar = /test/;
    const errVar = new Error();
    const symVar = Symbol('test');
    const mapVar = new Map();
    const setVar = new Set();
    const weakMapVar = new WeakMap();
    const weakSetVar = new WeakSet();
    const nullVar = null;
    const undefVar = undefined;
    const int8ArrVar = new Int8Array();
    const uint8ArrVar = new Uint8Array();
    const uint8ClampedArrVar = new Uint8ClampedArray();
    const int16ArrVar = new Int16Array();
    const uint16ArrVar = new Uint16Array();
    const int32ArrVar = new Int32Array();
    const uint32ArrVar = new Uint32Array();
    const float32ArrVar = new Float32Array();
    const float64ArrVar = new Float64Array();
    const bigInt64ArrVar = new BigInt64Array(); // eslint-disable-line no-undef
    const bigUint64ArrVar = new BigUint64Array(); // eslint-disable-line no-undef
    const arrBufVar = new ArrayBuffer();
    const dataViewVar = new DataView(arrBufVar);
    const genVar = function* () {};
    const asyncFuncVar = async function () {};
    const asyncGenVar = async function* () {};
    const reflectVar = Reflect;
    const proxyVar = new Proxy({}, {});
    const promiseVar = new Promise(() => {});

    expect(trueTypeOf(numVar)).toBe('number');
    expect(trueTypeOf(nanVar)).toBe('number');
    expect(trueTypeOf(infVar)).toBe('number');
    expect(trueTypeOf(negInfVar)).toBe('number');
    expect(trueTypeOf(bigIntVar)).toBe('bigint');
    expect(trueTypeOf(strVar)).toBe('string');
    expect(trueTypeOf(boolVar)).toBe('boolean');
    expect(trueTypeOf(arrVar)).toBe('array');
    expect(trueTypeOf(objVar)).toBe('object');
    expect(trueTypeOf(funcVar)).toBe('function');
    expect(trueTypeOf(dateVar)).toBe('date');
    expect(trueTypeOf(regVar)).toBe('regexp');
    expect(trueTypeOf(errVar)).toBe('error');
    expect(trueTypeOf(symVar)).toBe('symbol');
    expect(trueTypeOf(mapVar)).toBe('map');
    expect(trueTypeOf(setVar)).toBe('set');
    expect(trueTypeOf(weakMapVar)).toBe('weakmap');
    expect(trueTypeOf(weakSetVar)).toBe('weakset');
    expect(trueTypeOf(nullVar)).toBe('null');
    expect(trueTypeOf(undefVar)).toBe('undefined');
    expect(trueTypeOf(int8ArrVar)).toBe('int8array');
    expect(trueTypeOf(uint8ArrVar)).toBe('uint8array');
    expect(trueTypeOf(uint8ClampedArrVar)).toBe('uint8clampedarray');
    expect(trueTypeOf(int16ArrVar)).toBe('int16array');
    expect(trueTypeOf(uint16ArrVar)).toBe('uint16array');
    expect(trueTypeOf(int32ArrVar)).toBe('int32array');
    expect(trueTypeOf(uint32ArrVar)).toBe('uint32array');
    expect(trueTypeOf(float32ArrVar)).toBe('float32array');
    expect(trueTypeOf(float64ArrVar)).toBe('float64array');
    expect(trueTypeOf(bigInt64ArrVar)).toBe('bigint64array');
    expect(trueTypeOf(bigUint64ArrVar)).toBe('biguint64array');
    expect(trueTypeOf(arrBufVar)).toBe('arraybuffer');
    expect(trueTypeOf(dataViewVar)).toBe('dataview');
    expect(trueTypeOf(genVar)).toBe('generatorfunction');
    expect(trueTypeOf(asyncFuncVar)).toBe('asyncfunction');
    expect(trueTypeOf(asyncGenVar)).toBe('asyncgeneratorfunction');
    expect(trueTypeOf(reflectVar)).toBe('reflect');
    expect(trueTypeOf(proxyVar)).toBe('object');
    expect(trueTypeOf(promiseVar)).toBe('promise');
  });
});
