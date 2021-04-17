<a name="isObjectLike"></a>

## isObjectLike(value) ⇒ <code>Boolean</code>
Checks if a value is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".

**Returns**: <code>Boolean</code> - Returns `true` if value is object-like, else `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**
```js
isObjectLike({});
// -> true

isObjectLike([1, 2, 3]);
// -> true

isObjectLike(function noop() {});
// -> false

isObjectLike(null);
// -> false
```
