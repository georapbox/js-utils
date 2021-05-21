<a name="pipe"></a>

## pipe(...fns) ⇒ <code>function</code>
Performs left-to-right function composition.
The leftmost function may have any arity; the remaining functions must be unary.

**Returns**: <code>function</code> - A new function as the result of the composition  

| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | The functions to compose |

**Example**  
```js
function inc(x) {
  return x + 1;
}

function double(x) {
  return x * 2;
}

pipe(inc, double)(3); // -> 8
pipe(double, inc)(3); // -> 7
```
