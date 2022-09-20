<a name="max"></a>

## max() ⇒ <code>Number</code>
Finds the largest of zero or more numbers.

NOTE: Prefer using an array of numbers if you want to compare a relatively large amount of numbers.  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array

**Returns**: <code>Number</code> - The largest number from the arguments provided.  

| Param | Type | Description |
| --- | --- | --- |
| [...nums] | <code>Number</code> \| <code>Array</code> | A set of numbers, or an array of numbers. |

**Example**  
```js
max(5);
// => 5

max([1, -10, 1024, 1024.5, 29]);
// => 1024.5

max(5, 10, 154, 4, 8, 87);
// => 154

max(NaN, 10);
// => NaN

max('', '1');
// => 1

max(0, true);
// => 1

max(false);
// => 0

max();
// => -Infinity
```
