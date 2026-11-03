<a name="dropRightWhile"></a>

## dropRightWhile(array, predicate) ⇒ <code>Array</code>
Creates a new array excluding elements from the end of the input array
while the predicate returns a truthy value.

Iteration starts at the array's initial last index, so elements appended
during iteration are not visited. The predicate may still modify the array.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array containing the remaining elements.  
**Throws**:

- <code>TypeError</code> If the first argument is not an array or the second argument is not a function.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| predicate | <code>function</code> | The function invoked with `(value, index, array)` for each element. |

**Example**  
```js
dropRightWhile([1, 2, 3, 4, 5], value => value > 3);
// => [1, 2, 3]

dropRightWhile([1, 2, 3], value => value > 5);
// => [1, 2, 3]

dropRightWhile([1, 2, 3], value => value > 0);
// => []
```
