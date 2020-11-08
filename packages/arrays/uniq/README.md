<a name="uniq"></a>

## uniq(array) ⇒ <code>Array</code>
Removes duplicate primitive values from an array.

**Returns**: <code>Array</code> - Returns the result (duplicates-free) array.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |

**Example**  
```js
uniq(['a', 'a', 'b', true, '2', 2, false, true]);
// -> ['a', 'b', true, '2', 2, false]
```
