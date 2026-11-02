<a name="flatten"></a>

## move(array, fromIndex, toIndex) ⇒ <code>Array</code>
Move an array element to a different position.

**Returns**: <code>Array</code> - The new array with the element moved to a new position.  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `fromIndex` or `toIndex` is not number.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to flatten. |
| fromIndex | <code>Number</code> | Index of the element to move. If negative, will begin that many elements from the end. |
| toIndex | <code>Number</code> | Index of the position the element should move to. If negative, will begin that many elements from the end. |

**Example**  
```js
const array = ['A', 'B', 'C', 'D', 'E'];

move(array, 0, 1);
// => ['B', 'A', 'C', 'D', 'E']

move(array, 0, array.length - 1);
// => ['B', 'C', 'D', 'E', 'A']

move(array, -1, 3);
// => ['A', 'B', 'C', 'E', 'D']

move(array, -1, -3);
// => ['A', 'B', 'E', 'C', 'D']
```
