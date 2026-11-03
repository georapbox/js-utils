<a name="uniqBy"></a>

## uniqBy(array, iteratee) ⇒ <code>Array</code>
Creates a duplicate-free array using an `iteratee` function to compute a
unique key for each element. Only the first occurrence of each key is kept,
preserving the original order.

Keys are compared using SameValueZero equality.

**Kind**: global function  
**Returns**: <code>Array</code> - The duplicate-free array.  
**Throws**:

- <code>TypeError</code> If `array` is not an array or `iteratee` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| iteratee | <code>function</code> | The function invoked with each array element to compute its uniqueness key. |

**Example**  
```js
const arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'George' },
  { id: 1, name: 'Helen' }
];

uniqBy(arr, (item) => item.id);
// => [{ id: 1, name: 'John' }, { id: 2, name: 'George' }]
```
