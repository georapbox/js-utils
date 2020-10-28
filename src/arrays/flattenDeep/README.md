<a name="flattenDeep"></a>

## flattenDeep(array) ⇒ <code>Array</code>
Flattens array recursively.

**Returns**: <code>Array</code> - The new flattened array.  
**Category**: Array  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to flatten. |

**Example**  
```js
flattenDeep([1, [2, [3, [4]], 5], [6]]);
// -> [1, 2, 3, 4, 5, 6]

function dummy() {
  var arr = [1, [2, [3, [4]], 5]];
  arr.push(arguments);
  arr.push({foo: 'bar', length: 23});
  return arr;
}

flattenDeep(dummy('a', 'b'));
// -> [1, 2, 3, 4, 5, 'a', 'b', {foo: 'bar', length: 23}]
```
