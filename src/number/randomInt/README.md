<a name="randomInt"></a>

## randomInt(min, max) ⇒ <code>number</code>
Returns a pseudo-random integer within an inclusive range.

If `min` is greater than `max`, the bounds are swapped.
Both bounds must be safe integers, and the range size must not
exceed the maximum safe integer.

Randomness is provided by `Math.random()` and is not suitable
for cryptographic purposes.

**Kind**: global function  
**Returns**: <code>number</code> - A pseudo-random integer within the inclusive range.  
**Throws**:

- <code>TypeError</code> If either argument is not a safe integer.
- <code>RangeError</code> If the range size exceeds the maximum safe integer.


| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The lower bound of the range. |
| max | <code>number</code> | The upper bound of the range. |

**Example**  
```js
randomInt(3, 8);
// => An integer between 3 and 8 (inclusive)

randomInt(8, 3);
// => An integer between 3 and 8 (inclusive)

randomInt(-5, 5);
// => An integer between -5 and 5 (inclusive)

randomInt(5, 5);
// => 5
```
