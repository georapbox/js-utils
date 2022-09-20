<a name="intersect"></a>

## intersect(...arrays) ⇒ <code>Array</code>
Creates an array of unique values that are included in all given arrays.
The order of result values is determined by the order they occur in the first array.

**Returns**: <code>Array</code> - The array of intersecting values.  
**Throws**:

- <code>TypeError</code> If any of the arguments is not array.

| Param | Type | Description |
| --- | --- | --- |
| ...arrays | <code>Array</code> | The arrays to intersect. |

**Example**  
```js
const arrA = [NaN, 3, 8, 'foo', 'bar'];
const arrB = [2, 7, 'foo', NaN, 3];
const arrC = [1, 2, 3, NaN];

intersect(arrA, arrB);
// => [NaN, 3, 'foo']

intersect(arrA, arrB, arrC);
// => [NaN, 3]
```
