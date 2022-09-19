<a name="shuffle"></a>

## shuffle(array) ⇒ <code>Array</code>
Creates a new array with its elements' order randomized,
using the Fisher-Yates (aka Knuth) Shuffle algorithm.

**Returns**: <code>Array</code> - Returns a new array with its elements randomised.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to shuffle. |

**Example**  
```js
shuffle(arr);
// => ['b', 'f', 'h', 'e', 'd', 'c', 'g', 'a']
```
