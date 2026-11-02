<a name="pipe"></a>

## pipe(...fns) ⇒ <code>function</code>
Performs left-to-right function composition.
The leftmost function may have any arity; the remaining functions must be unary.

**Returns**: <code>function</code> - A new function as the result of the composition.

| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | The functions to compose. |

**Example**
```js
const inc = x => x + 1;
const double = x => x * 2;

pipe(inc, double)(3); // => 8
pipe(double, inc)(3); // => 7

const capitalize = a => a.toUpperCase();
const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
const shoutGreeting = pipe(greeting, capitalize);
shoutGreeting('John', 'Doe'); // => 'HELLO, MY NAME IS JOHN DOE.'
```
