<a name="partialRight"></a>

## partialRight(func) ⇒ <code>function</code>
Creates a new function that invokes the provided function `func` with `partials` appended to the arguments it receives.

**Returns**: <code>function</code> - Returns the new partially applied function.  
**Throws**:

- <code>TypeError</code> Throws if `func` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to partially apply arguments to. |
| [...args] | <code>\*</code> | The arguments to be partially applied. |

**Example**  
```js
var greet = function (greeting, title, fname, lname) {
  return greeting + ', ' + title + ' ' + fname + ' ' + lname + '.';
};

var greetMrJoeBlack = partialRight(greet, 'Mr.', 'Joe', 'Black');

greetMrJoeBlack('Hello'); // -> Hello, Mr. Joe Black.
```