<a name="intersect"></a>

## intersect(...arrays) ⇒ <code>Array</code>
Creates an array of unique values that are included in all given arrays.
The order of result values is determined by their first occurrence in
the first array.

Values are compared using SameValueZero equality. This means `NaN` is
considered equal to `NaN`, and objects are compared by reference.
Sparse array holes are treated as `undefined` values.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array containing the unique intersecting values.  
**Throws**:

- <code>TypeError</code> If no arrays are provided or any argument is not an array.


| Param | Type | Description |
| --- | --- | --- |
| ...arrays | <code>Array</code> | The arrays to intersect. |

**Example**  
```js
intersect([1, 2, 2, 3], [2, 3, 4]);
// => [2, 3]

intersect([NaN, 3, 8, 'foo'], [3, NaN, 'bar']);
// => [NaN, 3]

intersect([1, 2, 3], [2, 3], [3, 4]);
// => [3]

intersect([1, , 3], [undefined, 3]);
// => [undefined, 3]
```
