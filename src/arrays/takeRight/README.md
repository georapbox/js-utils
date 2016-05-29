<a name="takeRight"></a>

## takeRight(array, [n]) ⇒ <code>Array</code>
Creates a slice of `array` with `n` items taken from the end.

**Kind**: global function  
**Returns**: <code>Array</code> - The slice of the array.  
**Category**: Array  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `n` is not number but not if is `null` or `undefined`.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to process. |
| [n] | <code>Number</code> | <code>1</code> | The number of items to take. |

**Example**  
```js
takeRight([1, 2, 3, 4, 5]);
// -> [5]

takeRight([1, 2, 3, 4, 5], null);
// -> [5]

takeRight([1, 2, 3, 4, 5], NaN);
// -> [5]

takeRight([1, 2, 3, 4, 5], 3);
// -> [3, 4, 5]

takeRight([1, 2, 3, 4, 5], 0);
// -> []

takeRight([1, 2, 3, 4, 5], -2);
// -> []

takeRight([1, 2, 3, 4, 5], 10);
// -> [1, 2, 3, 4, 5]

takeRight([1, 2, 3, 4, 5], Number.MAX_VALUE);
// -> [1, 2, 3, 4, 5]

takeRight([1, 2, 3, 4, 5], '2');
// -> Throws TypeError

takeRight({}, 2);
// -> Throws TypeError
```
