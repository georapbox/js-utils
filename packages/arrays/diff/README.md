<a name="diff"></a>

## diff(arrayA, arrayB) ⇒ <code>Array</code>
Creates an array with only the unique values from the first array,
by excluding all values from the second array using strict equality for comparisons.

**Returns**: <code>Array</code> - Array of values not included in the exclusion set.  
**Throws**:

- <code>TypeError</code> If any of the arguments passed are not arrays.


| Param | Type | Description |
| --- | --- | --- |
| arrayA | <code>Array</code> | The array to process. |
| arrayB | <code>Array</code> | The values to exclude from `arrayA`. |

**Example**  
```js
const obj = {
  foo: 'bar'
};

const a = [1, 2, 3, 4, 5, obj];
const b = [5, 2, 10, obj];

diff(a, b);
// => [1, 3, 4]

diff(a, []);
// => [1, 2, 3, 4, 5, obj]
```
