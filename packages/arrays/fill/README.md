<a name="fill"></a>

## fill(array, value, [start], [end]) ⇒ <code>Array</code>
Fills elements of array with value from start up to end (not including end).

**Returns**: <code>Array</code> - The new array.  
**Category**: Array  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to fill. |
| value | <code>\*</code> |  | The value to fill array with. |
| [start] | <code>Number</code> | <code>0</code> | The start position. |
| [end] | <code>Number</code> | <code>array.length</code> | The end position. |

**Example**  
```js
fill(['a', 'b', 'c'], '*');
// -> ['*', '*', '*']

fill(['a', 'b', 'c'], '*', 0, 2);
// -> ['*', '*', 'c']

fill(['a', 'b', 'c'], '*', -1, 3);
// -> ['a', 'b', '*']

fill(['a', 'b', 'c'], '*', -1, 2);
// -> ['a', 'b', 'c']

fill(['a', 'b', 'c'], '*', 0, -2);
// -> ['*', 'b', 'c']

fill(['a', 'b', 'c']);
// -> [undefined, undefined, undefined]
```
