<a name="take"></a>

## take(array, [n]) ⇒ <code>Array</code>
Creates a slice of `array` with `n` items taken from the beginning.

**Returns**: <code>Array</code> - The slice of the array.  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `n` is not number but not if is `undefined`.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to process. |
| [n] | <code>Number</code> | <code>1</code> | The number of items to take. |

**Example**  
```js
take([1, 2, 3, 4, 5]);
// => [1]

take([1, 2, 3, 4, 5], NaN);
// => [1]

take([1, 2, 3, 4, 5], 3);
// => [1, 2, 3]

take([1, 2, 3, 4, 5], 0);
// => []

take([1, 2, 3, 4, 5], -2);
// => []

take([1, 2, 3, 4, 5], 10);
// => [1, 2, 3, 4, 5]

take([1, 2, 3, 4, 5], Number.MAX_VALUE);
// => [1, 2, 3, 4, 5]

take([1, 2, 3, 4, 5], '2');
// => Throws TypeError

take({}, 2);
// => Throws TypeError
```
