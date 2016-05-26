<a name="intersection"></a>

## intersection() ⇒ <code>Array</code>
Creates an array of unique values that are included in all given arrays.
The order of result values is determined by the order they occur in the first array.

**Kind**: global function  
**Returns**: <code>Array</code> - The array of intersecting values.  
**Category**: Array  
**Note**: To support legacy browsers use `Array.prototype.reduce` and `Array.prototype.filter` polyfills.  
**Note**: Internal usage of [Array > includes](../src/arrays/includes) function.  

| Param | Type | Description |
| --- | --- | --- |
| ...arrays | <code>Array</code> | The arrays to intersect. |

**Example**  
```js
var arrA = [NaN, 3, 8, 'foo', 'bar'];
var arrB = [2, 7, 'foo', NaN, 3];
var arrC = [1, 2, 3, NaN];

intersection(arrA, arrB);
// -> [NaN, 3, 'foo']

intersection(arrA, arrB, arrC);
// -> [NaN, 3]
```
