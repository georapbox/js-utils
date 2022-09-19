<a name="partition"></a>

## partition(array, [predicate]) ⇒ <code>Array</code>
Creates an array of elements split into two groups (arrays), the first of which contains the elements that the `predicate` returns truthy for,
the second of which contains the elements that the `predicate` returns falsy for.
The predicate is invoked with three arguments: (value, index, collection).

**Returns**: <code>Array</code> - Returns the array of grouped elements.  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `predicate` is defined but not a function.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to iterate over. |
| [predicate] | <code>function</code> | <code>Identity</code> | The function invoked per iteration. |

**Example**
```js
const users = [{
  name: 'John',
  isAdmin: true
}, {
  name: 'George',
  isAdmin: false
}, {
  name: 'Alice',
  isAdmin: true
}];

partition(users, user => user.isAdmin);
// => [[{ name: 'John', isAdmin: true }, { name: 'Alice', isAdmin: true }], [{ name: 'George', isAdmin: false }]]

const numbers = [1, 3, 5, -4, 6, -2];

partition(numbers, num => num > 0);
// => [[1, 3, 5, 6], [-4, -2]]
```
