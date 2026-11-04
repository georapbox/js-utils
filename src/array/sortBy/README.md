<a name="sortBy"></a>

## sortBy(array, field, [ascending], [primer]) ⇒ <code>Array</code>
Sorts an array of plain objects (not in place) by property.

**Returns**: <code>Array</code> - Returns the new sorted array.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to sort. |
| field | <code>String</code> |  | The field to sort the array by. |
| [ascending] | <code>Boolean</code> | <code>true</code> | Defines the sort order. This is not optional if `primer` is required. |
| [primer] | <code>function</code> |  | Manipulates the field to sort by. |

**Example**  
```js
const homes = [
  {h_id: 8, city: 'Dallas', price: '162500'},
  {h_id: 4, city: 'Beverly Hills', price: '162500.5'},
  {h_id: 5, city: 'new York', price: '162500.1'}
];

sortBy(homes, 'h_id');
// => "[{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":8,"city":"Dallas","price":"162500"}]"

sortBy(homes, 'h_id', false);
// => "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"

sortBy(homes, 'price', true);
// => "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":5,"city":"new York","price":"162500.1"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"}]"

sortBy(homes, 'price', true, function (field) {
  return parseInt(field);
});
// => "[{"h_id":8,"city":"Dallas","price":"162500"},{"h_id":4,"city":"Bevery Hills","price":"162500.5"},{"h_id":5,"city":"new York","price":"162500.1"}]"
```
