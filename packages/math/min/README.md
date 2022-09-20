<a name="min"></a>

## min() ⇒ <code>Number</code>
Finds the smallest of zero or more numbers.

NOTE: Prefer using an array of numbers if you want to compare a relatively large amount of numbers.  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array

**Returns**: <code>Number</code> - The smallest number from the arguments provided.  

| Param | Type | Description |
| --- | --- | --- |
| [...nums] | <code>Number</code> \| <code>Array</code> | A set of numbers as arguments, or an array of numbers as the only argument. |

**Example**  
```js
min(5);
// => 5

min([1, -10, 1024, 1024.5, 29]);
// => -10

min(5, 10, 154, 4, 8, 87);
// => 4

min(NaN, 10);
// => NaN

min('', '1');
// => 0

min(0, true);
// => 0

min(false);
// => 0

min(true);
// => 1

min();
// => Infinity
```
