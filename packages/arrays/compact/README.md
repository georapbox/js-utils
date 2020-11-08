<a name="compact"></a>

## compact(array) ⇒ <code>Array</code>
Creates an array with all falsy values removed.
`false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsy.

**Returns**: <code>Array</code> - Returns the new array of filtered values.  
**Throws**:

- <code>TypeError</code> If `array` is not array.

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to compact. |

**Example**  
```js
compact([0, 1, false, 2, '', 3, null]);
// => [1, 2, 3]
```
