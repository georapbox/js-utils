<a name="drop"></a>

## drop(array, [n]) ⇒ <code>Array</code>
Creates a slice of `array` with `n` elements dropped from the beginning.

**Returns**: <code>Array</code> - The slice of the array.  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `n` is not number but not if is `undefined`.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to process. |
| [n] | <code>Number</code> | <code>1</code> | The number of elements to drop. |

**Example**  
```js
drop([1, 2, 3, 4, 5]);
// => [2, 3, 4, 5]

drop([1, 2, 3, 4, 5], null);
// => [2, 3, 4, 5]

drop([1, 2, 3, 4, 5], NaN);
// => [2, 3, 4, 5]

drop([1, 2, 3, 4, 5], 3);
// => [4, 5]

drop([1, 2, 3, 4, 5], 0);
// => [1, 2, 3, 4, 5]

drop([1, 2, 3, 4, 5], -2);
// => [1, 2, 3, 4, 5]

drop([1, 2, 3, 4, 5], 10);
// => []

drop([1, 2, 3, 4, 5], Number.MAX_VALUE);
// => []

drop([1, 2, 3, 4, 5], '2');
// => Throws TypeError

drop({}, 2);
// => Throws TypeError
```
