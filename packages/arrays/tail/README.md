<a name="tail"></a>

## tail(array) ⇒ <code>Array</code>
Gets all but the first element of array.

**Returns**: <code>Array</code> - The new tailed array.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |

**Example**  
```js
tail([1, 2, 3,]);
// => [2, 3]

tail([1]);
// => []

tail([]);
// => []
```
