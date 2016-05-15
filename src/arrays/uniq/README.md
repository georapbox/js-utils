<a name="uniq"></a>

## uniq(array) ⇒ <code>Array</code>
Removes duplicate primitive values from an array.

**Kind**: global function  
**Returns**: <code>Array</code> - Returns the result (duplicates-free) array.  
**Category**: Array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |

**Example**  
```js
uniq(['a', 'a', 'b', true, '2', 2, false, true]);// -> ['a', 'b', true, '2', 2, false]
```
