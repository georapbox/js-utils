<a name="clamp"></a>

## clamp(number, [lower], upper) ⇒ <code>Number</code>
Clamps number within the inclusive `lower` and `upper` bounds.

**Kind**: global function  
**Returns**: <code>Number</code> - The clamped number.  
**Category**: Number  
**Throws**:

- <code>TypeError</code> If `number` is not number.
- <code>TypeError</code> If `lower` is defined and is not number.
- <code>TypeError</code> If `upper` is defined and is not number.

| Param | Type | Description |
| --- | --- | --- |
| number | <code>Number</code> | The number to clamp. |
| [lower] | <code>Number</code> | The lower bound. |
| upper | <code>Number</code> | The upper bound. |

**Example**  
```js
clamp(10, -5, 5);
// -> 5

clamp(-10, -5, 5);
// -> -5

clamp(10, -5);
// -> -5

clamp(10, 5);
// -> 5

clamp(10, NaN, NaN);
// -> 0

clamp(10, '-5', '5');
// -> Throws TypeError
```
