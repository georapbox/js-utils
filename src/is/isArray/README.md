<a name="isArray"></a>

## isArray(value) ⇒ <code>Boolean</code>
Checks if 'value' is array.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if array, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check if is array. |

**Example**  
```js
isArray(['a', 'b', 'c', 'd']);
// -> true

isArray(100);
// -> false

isArray('Lorem ipsum dolor sit amet');
// -> false

isArray({ a: 'a', b: 'b' });
// -> false
```
