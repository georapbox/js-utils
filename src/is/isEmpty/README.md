<a name="isEmpty"></a>

## isEmpty(value) ⇒ <code>Boolean</code>
Checks if a value is an empty object, collection, map, or set.

Any other primitive types (`number`, `null`, `undefined`, `boolean` `symbol`, `function`, `RegExp`) are considered empty.

**Returns**: <code>Boolean</code> - Returns `true` if value is empty, otherwise `false`.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**
```js
isEmpty([]); // => true
isEmpty([1, 2, 3]); // => false

isEmpty({}); // => true
isEmpty({foo: 'bar'}); // => false
isEmpty(Object.create(null)); // => true
isEmpty(Object.create({})); // => true
isEmpty(Object.create({foo: 'bar'})); // => true

isEmpty(new Map()); // => true
isEmpty((new Map()).set('foo', 'bar')); // => false

isEmpty(new Set()); // => true
isEmpty(new Set([1, 2, 3])); // => false

isEmpty(Symbol()); // => true
isEmpty(Symbol('foo')); // => true

isEmpty(''); // => true
isEmpty(String('')); // => true
isEmpty(new String('')); // => true
isEmpty('foo'); // => false
isEmpty(String('foo')); // => false
isEmpty(new String('foo')); // => false

isEmpty(0); // => true
isEmpty(Number(0)); // => true
isEmpty(new Number(0)); // => true
isEmpty(1); // => true
isEmpty(Number(1)); // => true
isEmpty(new Number(1)); // => true

isEmpty(true); // => true
isEmpty(Boolean(true)); // => true
isEmpty(new Boolean(true)); // => true
isEmpty(false); // => true
isEmpty(Boolean(false)); // => true
isEmpty(new Boolean(false)); // => true

isEmpty(function noop() {}); // => true
isEmpty(class MyClass {}); // => true

isEmpty(/s+/g); // => true
isEmpty(new RegExp('s+', 'g')); // => true

isEmpty(null); // => true
isEmpty(undefined); // => true
```
