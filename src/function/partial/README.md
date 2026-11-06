<a name="partial"></a>

## partial(fn, ...partials) ⇒ <code>function</code>
Creates a function that invokes `fn` with the specified partial arguments
prepended to the arguments provided when the returned function is called.

The returned function preserves the caller's `this` binding and
forwards the return value of `fn`.
If no partial arguments are provided, all arguments are forwarded unchanged.

**Kind**: global function  
**Returns**: <code>function</code> - The partially applied function.  
**Throws**:

- <code>TypeError</code> If `fn` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to partially apply. |
| ...partials | <code>any</code> | The arguments to prepend. |

**Example**  
```js
const greet = (greeting, firstName, lastName) =>
  `${greeting}, ${firstName} ${lastName}!`;

const sayHello = partial(greet, 'Hello');

sayHello('John', 'Doe');
// => 'Hello, John Doe!'

const fn = partial((...args) => args, 1, 2);

fn(3, 4);
// => [1, 2, 3, 4]
```
