<a name="randomDist"></a>

## randomDist(min, max, [iterations]) ⇒ <code>Number</code>
Returns a weighted random number (that tends to the center)
of a range of numbers based on the number of the iterations set.

**Returns**: <code>Number</code> - The weighted random number.  
**Throws**:

- <code>TypeError</code> If one or more of the arguments passed is not a number.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| min | <code>Number</code> |  | The minimum value of the range. |
| max | <code>Number</code> |  | The maximum value of the range. |
| [iterations] | <code>Number</code> | <code>2</code> | The number of the iterations. |

**Example**  
```js
randomDist(0, 100, 3);
// -> 40.30361851105565

randomDist(0, 100); // iterations = 2
// -> 59.116191772363024
```
