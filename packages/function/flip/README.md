<a name="flip"></a>

## flip(func) ⇒ <code>function</code>
Creates a function that invokes the original function with its parameters reversed.

**Returns**: <code>function</code> - Returns the new flipped function.  
**Throws**:

- <code>TypeError</code> Throws if `func` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to invoke with its parameters reversed. |

**Example**  
```js
var flipped = flip(function () {
  return Array.prototype.slice.call(arguments, 0);
});

flipped(1, 2, 3, 4); // -> [4, 3, 2, 1]
```