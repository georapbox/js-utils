<a name="diff"></a>

## diff(arrayA, arrayB) ⇒ <code>Array</code>
Creates a new array containing the values from the first array
that are not present in the second array.

Values are compared using SameValueZero equality. This means `NaN` is
considered equal to `NaN`, and objects are compared by reference.
Duplicate values and their original order are preserved.
Sparse array holes are treated as `undefined` values.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array containing the values not excluded by `arrayB`.  
**Throws**:

- <code>TypeError</code> If either argument is not an array.


| Param | Type | Description |
| --- | --- | --- |
| arrayA | <code>Array</code> | The array to process. |
| arrayB | <code>Array</code> | The values to exclude from `arrayA`. |

**Example**  
```js
diff([1, 1, 2, 2, 3, 4], [2, 4]);
// => [1, 1, 3]

diff([1, NaN, 2], [NaN]);
// => [1, 2]

const obj = { foo: 'bar' };
diff([1, 2, obj], [2, obj]);
// => [1]

diff([1, , 3], []);
// => [1, undefined, 3]
```
