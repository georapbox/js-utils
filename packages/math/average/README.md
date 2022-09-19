<a name="average"></a>

## average() ⇒ <code>Number</code>
Calculates the average of a set of numbers.
Accepts any number of numbers as parameters, or an array of numbers.
Ommits any non number value.

**Returns**: <code>Number</code> - The average number of the set of data provided.  

| Param | Type | Description |
| --- | --- | --- |
| [...nums] | <code>Number</code> &#124; <code>Array</code> | A set of numbers or an array of numbers. |

**Example**  
```js
average(5, 10, 50, -45, 6, 7); // => 5.5
average([5, 10, 50, -45, 6, 7]); // => 5.5

average(2, 4, 0, -0); // => 1.5
average([2, 4, 0, -0]); // => 

average(7); // => 7
average([7]); // => 7

average(0, -0); // => 0
average([0, -0]); // => 0

average(); // => 0
average([]); // => 0

average(Infinity, -Infinity, 0, -0, null, NaN, undefined, false, true, 'foo'); // => 0
average([Infinity, -Infinity, 0, -0, null, NaN, undefined, false, true, 'foo']); // => 0

average(5, 4, null, true, '12', Infinity); // => 0
average([5, 4, null, true, '12', Infinity]); // => 0
```
