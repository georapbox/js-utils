<a name="isFlatArray"></a>

## isFlatArray(value) ⇒ <code>Boolean</code>
Checks if a value is a flat array. If the value is not array, will return `false`.

**Returns**: <code>Boolean</code> - Returns `true` if value is flat array, otherwise returns `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isFlatArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// => true

isFlatArray([1, 2, [3], [4, 5], 6, 7, [8], 9]);
// => false

isFlatArray([]);
// => true

isFlatArray(new Set());
// => false
```
