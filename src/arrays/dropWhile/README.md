<a name="dropWhile"></a>

## dropWhile(The, predicate) ⇒ <code>Array</code>
Creates a slice of `array` excluding elements dropped from the beginning, until `predicate` returns falsy.
The predicate is invoked with three arguments: (`value`, `index`, `array`).

**Kind**: global function  
**Returns**: <code>Array</code> - The slice of the array.  
**Category**: Array  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `predicate` is not function but not if is `null` or `undefined`.


| Param | Type | Description |
| --- | --- | --- |
| The | <code>Array</code> | array to process. |
| predicate | <code>function</code> | The function invoked per iteration. |

**Example**  
```js
var books = [
  {title: 'Javascript Design Patterns', read: false},
  {title: 'Programming Javascript Applications', read: false},
  {title: 'JavaScript The Good Parts', read: true},
  {title: 'Eloquent Javascript', read: false}
];

dropWhile(books, function (book, index, books) {
  return !book.read;
});
// -> [{title: 'JavaScript The Good Parts', read: true}, {title: 'Eloquent Javascript', read: false}]
```
