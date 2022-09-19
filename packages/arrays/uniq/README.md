<a name="uniq"></a>

## uniq(array) ⇒ <code>Array</code>
Creates a duplicate-free version of an array, using [SameValueZero](https://262.ecma-international.org/7.0/#sec-samevaluezero) for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

**Returns**: <code>Array</code> - Returns the result (duplicates-free) array.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |

**Example**  
```js
const obj = {foo: 'bar'};
const arr = ['foo', 'bar'];
const values = ['a', 'a', 'b', '2', 2, obj, obj, arr, arr, true, true, false, false, NaN, NaN];

uniq(values);
// => ['a', 'b', '2', 2, obj, arr, true, false, NaN]
```
