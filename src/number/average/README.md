<a name="average"></a>

## average(...nums) ⇒ <code>number</code>
Calculates the arithmetic mean of the provided numbers.

Non-finite numbers and non-number values are ignored.
Returns `0` if no valid numbers are provided.

**Kind**: global function  
**Returns**: <code>number</code> - The average of the valid numbers, or `0` if none are found.  

| Param | Type | Description |
| --- | --- | --- |
| ...nums | <code>number</code> | The numbers to average. |

**Example**  
```js
average(5, 10, 50, -45, 6, 7);
// => 5.5

average(2, 4, 0, -0);
// => 1.5

average(5, 4, null, true, '12', Infinity);
// => 4.5

average(7);
// => 7

average();
// => 0

average(NaN, Infinity, null, undefined);
// => 0
```
