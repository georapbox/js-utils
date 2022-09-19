<a name="isMap"></a>

## isMap(value) ⇒ <code>Boolean</code>
Checks if value is classified as a Map object.

**Returns**: <code>Boolean</code> - True if value is classified as a Map object, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isMap(new Map());
// => true

isMap(new WeakMap());
// => false

isMap(new Map([['foo', 'bar'], ['hello', 'world']]));
// => true

isMap({foo: 'bar', 'hello': 'world'});
// => false
```
