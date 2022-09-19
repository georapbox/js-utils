<a name="isWeakMap"></a>

## isWeakMap(value) ⇒ <code>Boolean</code>
Checks if a value is classified as a WeakMap object.

**Returns**: <code>Boolean</code> - True if value is classified as a WeakMap object, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>value</code> | The value to check. |

**Example**  
```js
isWeakMap(new WeakMap());
// => true

isWeakMap(new Map());
// => false

const obj = {
  foo: 'bar'
};

isWeakMap(new WeakMap([[obj, 'foobar']]));
// => true

isWeakMap([['foo', 'bar'], ['hello', 'world']]);
// => false
```
