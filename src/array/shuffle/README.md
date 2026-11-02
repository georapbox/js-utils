<a name="shuffle"></a>

## shuffle(array) ⇒ <code>Array</code>
Creates a new array with its elements' order randomized,
using the Fisher-Yates (aka Knuth) Shuffle algorithm.

**Returns**: <code>Array</code> - Returns a new array with its elements randomized.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to shuffle. |

**Example**  
```js
shuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
// => ['b', 'f', 'h', 'e', 'd', 'c', 'g', 'a']

shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// => [5, 10, 9, 3, 4, 1, 6, 7, 8, 2]
```
