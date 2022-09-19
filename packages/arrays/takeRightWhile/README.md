<a name="takeRightWhile"></a>

## takeRightWhile(array, [predicate]) ⇒ <code>Array</code>
Creates a slice of `array` with elements taken from the end, until `predicate` returns falsy.
The `predicate` is invoked with three arguments: (`value`, `index`, `array`).

**Returns**: <code>Array</code> - The slice of `array`.  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `predicate` is not function but not if is `undefined`.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| predicate | <code>function</code> | The function invoked per iteration. |

**Example**  
```js
const books = [
  {title: 'Javascript Design Patterns', read: false},
  {title: 'Programming Javascript Applications', read: true},
  {title: 'JavaScript The Good Parts', read: false},
  {title: 'Eloquent Javascript', read: false}
];

takeRightWhile(books, function (book, index, books) {
  return !book.read;
});
// => [{title: 'JavaScript The Good Parts', read: false}, {title: 'Eloquent Javascript', read: false}]
```
