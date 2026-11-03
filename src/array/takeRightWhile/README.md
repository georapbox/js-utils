<a name="takeRightWhile"></a>

## takeRightWhile(array, predicate) ⇒ <code>Array</code>
Creates a slice of an array containing elements from the end
until the predicate returns a falsy value.

Iteration is limited to the array's initial length, so elements appended
during iteration are not visited. The predicate may still modify the array.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array containing the trailing elements that satisfy the predicate.  
**Throws**:

- <code>TypeError</code> If the first argument is not an array or the second argument is not a function.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| predicate | <code>function</code> | The function invoked with `(value, index, array)` for each element. |

**Example**  
```js
takeRightWhile([1, 2, 3, 4, 5], value => value > 3);
// => [4, 5]

takeRightWhile([1, 2, 3], value => value > 5);
// => []

takeRightWhile([1, 2, 3], value => value > 0);
// => [1, 2, 3]
```
