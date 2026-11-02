<a name="zip"></a>

## zip ⇒ <code>Array</code>
Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
the second of which contains the second elements of the given arrays, and so on.

**Returns**: <code>Array</code> - Returns the new array of grouped elements.  
**Throws**:

- <code>TypeError</code> If any argument is not an array.


| Param | Type | Description |
| --- | --- | --- |
| ...arrays | <code>Array</code> | The arrays to process. |

**Example**
```js
zip([1, 2, 3], [11, 22, 33], [111, 222, 333]);
// => [[1, 11, 111], [2, 22, 222], [3, 33, 333]]

zip([1, 2, 3], [11, 22, 33], [111, 222]);
// => [[1, 11, 111], [2, 22, 222], [3, 33, undefined]]

zip([1, 2, 3], [11, 22], [111]);
// => [[1, 11, 111], [2, 22, undefined], [3, undefined, undefined]]

zip([], []);
// => []

zip();
// => []
```
