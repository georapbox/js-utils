<a name="flip"></a>

## flip(fn) ⇒ <code>function</code>
Creates a function that invokes `fn` with its arguments in reverse order.

The returned function preserves the caller's `this` binding and
forwards the return value of `fn`.
All arguments are reversed, regardless of the function's declared arity.

**Kind**: global function  
**Returns**: <code>function</code> - The new function with reversed arguments.  
**Throws**:

- <code>TypeError</code> If `fn` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function whose arguments to reverse. |

**Example**  
```js
const flipped = flip((...args) => args);

flipped(1, 2, 3, 4);
// => [4, 3, 2, 1]

const subtract = (a, b) => a - b;
const flippedSubtract = flip(subtract);

flippedSubtract(10, 3);
// => -7
```
