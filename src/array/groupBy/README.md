<a name="groupBy"></a>

## groupBy(array, iteratee) ⇒ <code>Object</code>
Creates an object composed of keys generated from the results of running each element of `array` through `iteratee`.
The order of grouped values is determined by the order they occur in the `array`.

**Returns**: <code>Object</code> - Returns the composed aggregate object.  
**Throws**:

- <code>TypeError</code> If `array` is not array.

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to iterate over. |
| iteratee | <code>String</code> \| <code>function</code> | The iteratee to transform keys. It is invoked with one argument, the array item. |

**Example**
```js
groupBy(['one', 'two', 'three', 'four', 'five'], function (item) {
  return item.length;
});
// => { '3': ['one', 'two'], '4': ['four', 'five'], '5': ['three'] }

groupBy([
  { name: 'John' },
  { name: 'George' },
  { name: 'Helen' },
  { name: 'John' },
  { name: 'Helen' },
  { name: 'Alex' },
  { name: 'George' }
], 'name');
// => { 'John': [{'name': 'John'}, {'name': 'John'}], 'George': [{'name': 'George'}, {'name': 'George'}], 'Helen': [{'name': 'Helen'}, {'name': 'Helen'}], 'Alex': [{'name': 'Alex'}] }
```
