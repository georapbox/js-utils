<a name="flatten"></a>

## flatten(array) ⇒ <code>Array</code>
Flattens array a single level deep.

**Returns**: <code>Array</code> - The new flattened array.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to flatten. |

**Example**  
```js
flatten([[1, 2], [3, 4], [5], 6]);
// -> [1, 2, 3, 4, 5, 6]

flatten([1, [2, [3, [4]], 5], [10]]);
// -> [1, 2, [3, [4]], 5, 10]

function dummy() {
  var arr = [1, [2, [3, [4]], 5]];
  arr.push(arguments);
  arr.push({foo: 'bar', length: 23});
  return arr;
}

flatten(dummy('a', 'b'));
// -> [1, 2, [3, [4]], 5, 'a', 'b', {foo: 'bar', length: 23}]
```
