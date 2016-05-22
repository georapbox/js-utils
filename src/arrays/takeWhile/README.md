<a name="takeWhile"></a>

## takeWhile(array, [predicate]) ⇒ <code>Array</code>
Creates a slice of `array` with elements taken from the beginning, until `predicate` returns falsy.
The predicate is invoked with three arguments: (`value`, `index`, `array`).

**Kind**: global function  
**Returns**: <code>Array</code> - The slice of `array`.  
**Category**: Array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| [predicate] | <code>function</code> | The function invoked per iteration. |

**Example**  
```js
var books = [
  {title: 'Javascript Design Patterns', read: false},
  {title: 'Programming Javascript Applications', read: false},
  {title: 'JavaScript: The Good Parts', read: true},
  {title: 'Eloquent Javascript', read: false}
];

takeWhile(books, function (book, index, books) {
  return !book.read;
});
// -> [{title: 'Javascript Design Patterns', read: false}, {title: 'Programming Javascript Applications', read: false}]

takeWhile(books, function (book, index, books) {
  return book.read;
});
// -> []

takeWhile(books);
// -> [{title: 'Javascript Design Patterns', read: false}, {title: 'Programming Javascript Applications', read: false}, {title: 'JavaScript: The Good Parts', read: true}, {title: 'Eloquent Javascript', read: false}]
```
