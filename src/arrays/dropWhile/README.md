<a name="dropWhile"></a>

## dropWhile(array, [predicate]) ⇒ <code>Array</code>
Creates a slice of `array` excluding elements dropped from the beginning, until `predicate` returns falsy.
The predicate is invoked with three arguments: (`value`, `index`, `array`).

**Kind**: global function  
**Returns**: <code>Array</code> - The slice of the `array`.  
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
  {title: 'JavaScript The Good Parts', read: true},
  {title: 'Eloquent Javascript', read: false}
];

dropWhile(books, function (book, index, books) {
  return !book.read;
});
// -> [{title: 'JavaScript The Good Parts', read: true}, {title: 'Eloquent Javascript', read: false}]

dropWhile(books, function (book, index, books) {
  return book.read;
});
// -> [{title: 'Javascript Design Patterns', read: false}, {title: 'Programming Javascript Applications', read: false}, {title: 'JavaScript The Good Parts', read: true}, {title: 'Eloquent Javascript', read: false}]

dropWhile(books);
// -> [{title: 'Javascript Design Patterns', read: false}, {title: 'Programming Javascript Applications', read: false}, {title: 'JavaScript The Good Parts', read: true}, {title: 'Eloquent Javascript', read: false}]
```
