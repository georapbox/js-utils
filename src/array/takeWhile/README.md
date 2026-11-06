<a name="takeWhile"></a>

## takeWhile(array, predicate) ⇒ <code>Array</code>
Creates a slice of an array containing elements from the beginning
until the predicate returns a falsy value.

Iteration is limited to the array's initial length, so elements appended
during iteration are not visited. The predicate may still modify the array.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array containing the leading elements that satisfy the predicate.  
**Throws**:

- <code>TypeError</code> If the first argument is not an array or the second argument is not a function.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| predicate | <code>function</code> | The function invoked with `(value, index, array)` for each element. |

**Example**  
```js
takeWhile([1, 2, 3, 4, 5], value => value < 4);
// => [1, 2, 3]

takeWhile([1, 2, 3], value => value > 5);
// => []

takeWhile([1, 2, 3], value => value > 0);
// => [1, 2, 3]
```
