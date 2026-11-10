<a name="partition"></a>

## partition(array, [predicate]) ⇒ <code>Array</code>
Splits an array into two groups based on the result of a predicate.
The first group contains elements for which the predicate returns truthy,
and the second contains elements for which it returns falsy.

The predicate is invoked with three arguments: (value, index, array).
If omitted, the predicate defaults to an identity function.
Iteration is limited to the array's initial length, so elements appended
during iteration are not visited. The predicate may still modify the array.
Sparse array holes are treated as `undefined` values.

**Kind**: global function  
**Returns**: <code>Array</code> - An array containing the truthy and falsy groups.  
**Throws**:

- <code>TypeError</code> If the first argument is not an array or the second argument is not a function.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| [predicate] | <code>function</code> | The function invoked for each element. |

**Example**  
```js
partition([1, 3, 5, -4, 6, -2], value => value > 0);
// => [[1, 3, 5, 6], [-4, -2]]

partition([1, 2, 3, 4, 5], value => value % 2 === 0);
// => [[2, 4], [1, 3, 5]]

partition([0, 1, false, 2, null, 3]);
// => [[1, 2, 3], [0, false, null]]

partition([1, , 2]);
// => [[1, 2], [undefined]]
```
