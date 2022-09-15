<a name="partialRight"></a>

## partialRight(fn, ...args) ⇒ <code>function</code>
Creates a new function that invokes the provided function `fn` with `partials` appended to the arguments it receives.

**Returns**: <code>function</code> - Returns the new partially applied function.  
**Throws**:

- <code>TypeError</code> Throws if `fn` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to partially apply arguments to. |
| [...args] | <code>\*</code> | The arguments to be partially applied. |

**Example**
```js
const greet = (greeting, title, fname, lname) => `${greeting}, ${title} ${fname} ${lname}.`;
const greetMrJoeBlack = partialRight(greet, 'Mr.', 'Joe', 'Black');

greetMrJoeBlack('Hello'); //=> Hello, Mr. Joe Black.
```
