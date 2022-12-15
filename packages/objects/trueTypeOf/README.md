<a name="trueTypeOf"></a>

## trueTypeOf(value) ⇒ <code>string</code>
Determines the true type of a value using `Object.prototype.toString.call()`.

**Returns**: <code>string</code> - Returns the true type of `value` lowercased.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value to check. |

**Example**
```js
trueTypeOf(1); // => 'number'

trueTypeOf(BigInt(9007199254740991)); // => 'bigint'

trueTypeOf('string'); // => 'string'

trueTypeOf(true); // => 'boolean'

trueTypeOf([1, 2, 3]); // => 'array'

trueTypeOf({ a: 1, b: 2, c: 3 }); // => 'object'

trueTypeOf(() => {}); // => 'function'

trueTypeOf(new Date()); // => 'date'

trueTypeOf(/test/); // => 'regexp'

trueTypeOf(new Error()); // => 'error'

trueTypeOf(Symbol('test')); // => 'symbol'

trueTypeOf(new Map()); // => 'map'

trueTypeOf(new Set()); // => 'set'

trueTypeOf(new WeakMap()); // => 'weakmap'

trueTypeOf(new WeakSet()); // => 'weakset'

trueTypeOf(null); // => 'null'

trueTypeOf(undefined); // => 'undefined'

trueTypeOf(new Int8Array()); // => 'int8array'

trueTypeOf(new Uint8Array()); // => 'uint8array'

trueTypeOf(new Uint8ClampedArray()); // => 'uint8clampedarray'

trueTypeOf(new Int16Array()); // => 'int16array'

trueTypeOf(new Uint16Array()); // => 'uint16array'

trueTypeOf(new Int32Array()); // => 'int32array'

trueTypeOf(new Uint32Array()); // => 'uint32array'

trueTypeOf(new Float32Array()); // => 'float32array'

trueTypeOf(new Float64Array()); // => 'float64array'

trueTypeOf(new BigInt64Array()); // => 'bigint64array'

trueTypeOf(new BigUint64Array()); // => 'biguint64array'

trueTypeOf(new ArrayBuffer()); // => 'arraybuffer'

trueTypeOf(new DataView(new ArrayBuffer())); // => 'dataview'

trueTypeOf(function* () {}); // => 'generatorfunction'

trueTypeOf(async function () {}); // => 'asyncfunction'

trueTypeOf(async function* () {}); // => 'asyncgeneratorfunction'

trueTypeOf(Reflect); // => 'reflect'

trueTypeOf(new Proxy({}, {})); // => 'object'

trueTypeOf(new Promise(() => {})); // => 'promise'
```
