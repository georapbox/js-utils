<a name="partial"></a>

## partial(func) ⇒ <code>function</code>
Creates a new function that invokes the provided function `func` with `partials` prepended to the arguments it receives.

**Returns**: <code>function</code> - Returns the new partially applied function.  
**Throws**:

- <code>TypeError</code> Throws if `func` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to partially apply arguments to. |
| [...args] | <code>\*</code> | The arguments to be partially applied. |

**Example**  
```js
var add = function (a, b, c) {
  return a + b + c;
};

var p1 = partial(add, 1);
p1(2, 3); // -> 6

var p2 = partial(add, 10, 20);
p2(30); // -> 60

var p3 = partial(add, 100, 200, 300);
p3(); // -> 600

var p4 = partial(add);
p4(5, 10, 15); // -> 30
```