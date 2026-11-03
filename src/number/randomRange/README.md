<a name="randomRange"></a>

## randomRange(min, max) ⇒ <code>number</code>
Returns a pseudo-random number within a range, including the lower
bound and excluding the upper bound under normal floating-point arithmetic.

If `min` is greater than `max`, the bounds are swapped.
Both bounds must be finite numbers and must not be equal.

Due to floating-point rounding, the upper bound may occasionally
be returned. Randomness is provided by `Math.random()` and is not
suitable for cryptographic purposes.

**Kind**: global function  
**Returns**: <code>number</code> - A pseudo-random number within the range.  
**Throws**:

- <code>TypeError</code> If either argument is not a finite number.
- <code>RangeError</code> If the bounds are equal.


| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The lower bound of the range. |
| max | <code>number</code> | The upper bound of the range. |

**Example**  
```js
randomRange(3, 8);
// => A number between 3 and 8 (subject to floating-point rounding)

randomRange(8, 3);
// => A number between 3 and 8

randomRange(-5, 5);
// => A number between -5 and 5

randomRange(0.5, 2.5);
// => A number between 0.5 and 2.5
```
