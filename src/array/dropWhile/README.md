<a name="dropWhile"></a>

## dropWhile(array, predicate) ⇒ <code>Array</code>
Creates a new array excluding elements from the beginning of the input array
while the predicate returns a truthy value.

Iteration is limited to the array's initial length, so elements appended
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
dropWhile([1, 2, 3, 4, 5], value => value < 4);
// => [4, 5]

dropWhile([1, 2, 3], value => value > 5);
// => [1, 2, 3]

dropWhile([1, 2, 3], value => value > 0);
// => []
```
