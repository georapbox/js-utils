<a name="pluck"></a>

## pluck(array, key) ⇒ <code>Array</code>
Retrieves the value of a specified property from all elements in an array.

**Returns**: <code>Array</code> - Returns the result array.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to iterate over. |
| [key] | <code>String</code> | The name of the property to pluck. |

**Example**  
```js
const books = [
  {title: 'Around the World in Eighty Days', author: 'Jules Verne'},
  {title: 'The Mist', author: 'Stephen King'},
  {title: 'Journey to the Center of the Earth', author: 'Jules Verne'},
  {title: 'The Monster in the Closet', author: 'Stephen King'}
];

pluck(books, 'title');
// => ["Around the World in Eighty Days", "The Mist", "Journey to the Center of the Earth", "The Monster in the Closet"]

pluck(books, 'author');
// => ["Jules Verne", "Stephen King", "Jules Verne", "Stephen King"]
```
