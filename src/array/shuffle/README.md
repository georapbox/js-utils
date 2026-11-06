<a name="shuffle"></a>

## shuffle(array) ⇒ <code>Array</code>
Creates a new array with its elements shuffled into a random order
using the Fisher-Yates algorithm.

The original array is not modified. Sparse array holes are treated
as `undefined` values. Randomness is provided by `Math.random()`
and is not suitable for cryptographic purposes.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array containing the elements in random order.  
**Throws**:

- <code>TypeError</code> If the argument is not an array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to shuffle. |

**Example**  
```js
shuffle([1, 2, 3, 4, 5]);
// => [3, 1, 5, 2, 4] (example result; order varies)

shuffle(['a', 'b', 'c']);
// => ['c', 'a', 'b'] (example result; order varies)

shuffle([]);
// => []
```
