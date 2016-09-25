<a name="average"></a>

## average() ⇒ <code>Number</code>
Calculates the average of a set of numbers.
Accepts any number of numbers as parameters, or an array of numbers.
Ommits any non number value.

**Kind**: global function  
**Returns**: <code>Number</code> - The average number of the set of data provided.  
**Category**: Math  

| Param | Type | Description |
| --- | --- | --- |
| [args...] | <code>Number</code> &#124; <code>Array</code> | A set of numbers or an array of numbers. |

**Example**  
```js
average();
// -> 0

average(7);
// -> 7

average([7]);
// -> 7

average(2, 4);
// -> 3

average([2, 4]);
// -> 3

average(5, 10, 50, -45, 6, 7);
// -> 5.5

average([5, 10, 50, -45, 6, 7]);
// -> 5.5

average(5, 4, null, true, '12', Infinity);
// -> 4.5 (Omits any non number value)
```
