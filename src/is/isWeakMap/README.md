<a name="isWeakMap"></a>

## isWeakMap(value) ⇒ <code>Boolean</code>
Checks if `value` is classified as a WeakMap object.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if `value` is classified as a WeakMap object, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>value</code> | The value to check. |

**Example**  
```js
isWeakMap(new WeakMap());
// -> true

isWeakMap(new Map());
// -> false

var obj = {
  foo: 'bar'
};

isWeakMap(new WeakMap([[obj, 'foobar']]));
// -> true

isWeakMap([['foo', 'bar'], ['hello', 'world']]);
// -> false
```
