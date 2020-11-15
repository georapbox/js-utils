<a name="compose"></a>

## compose() ⇒ <code>function</code>
Performs right-to-left function composition.
The rightmost function may have any arity; the remaining functions must be unary.

**Returns**: <code>function</code> - A new function as the result of the composition  

| Param | Type | Description |
| --- | --- | --- |
| [...fns] | <code>function</code> | The functions to compose |

**Example**  
```js
function inc(x) {
  return x + 1;
}

function double(x) {
  return x * 2;
}

compose(inc, double)(3); // -> 7
compose(double, inc)(3); // -> 8
```