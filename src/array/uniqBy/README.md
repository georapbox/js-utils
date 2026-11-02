<a name="uniqBy"></a>

## uniqBy(array, iteratee) ⇒ <code>Array</code>

Creates a dupliate free array by accepting an `iteratee` which is invoked for each element in array.
The `iteratee` is invoked with one argument (each element in the array).

**Returns**: <code>Array</code> - The duplicate free array.  
**Throws**:

- <code>TypeError</code> If any of the arguments is not array.

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The initial array to inspect. |
| iteratee | <code>function</code> \| <code>String</code> | The iteratee invoked per element. |

**Example**
```js
const arr1 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'George' },
  { id: 1, name: 'Helen' }
];

const arr2 = [
  { v: 1.6 },
  { v: 2.1 },
  { v: 1.1 }
];

uniqBy(arr1, 'id');
// => [{ id: 1, name: 'John' }, { id: 2, name: 'George' }]

uniqBy(arr2, function (o) {
  return Math.floor(o.v);
});
// => [{ v: 1.6 }, { v: 2.1 }]
```
