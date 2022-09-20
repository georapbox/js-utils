<a name="sort"></a>

## sort(array, [ascending]) ⇒ <code>Array</code>
Sorts an array of primitive values of the same type.
Any `null`, `undefined` or `NaN` values are removed from the result array.
If array values are of different type, the result is not guaranteed to be correct.

**Returns**: <code>Array</code> - The new sorted array.  
**Throws**:

- <code>TypeError</code> If `array` is not array.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to sort. |
| [ascending] | <code>Boolean</code> | <code>true</code> | Defines the sort order. Falsy values will assume descending. |

**Example**  
```js
sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo']);
// => ['alpha', 'bravo', 'CHARLIE', 'Delta', 'lorem', 'Omega']

sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo'], false);
// => ['Omega', 'lorem', 'Delta', 'CHARLIE', 'bravo', 'alpha']

sort([4, 6, 2, 9, 100, 321, -2, 99], true);
// => [-2, 2, 4, 6, 9, 99, 100, 321]

sort([4, 6, 2, 9, 100, 321, -2, 99], false);
// => [321, 100, 99, 9, 6, 4, 2, -2]

sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], true);
// => [-10, -2, 2, 4, 6, 9, 99, 100, 321]

sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], false);
// => [321, 100, 99, 9, 6, 4, 2, -2, -10]
```
