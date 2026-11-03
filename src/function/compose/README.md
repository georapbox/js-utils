<a name="compose"></a>

## compose(...fns) ⇒ <code>function</code>
Performs right-to-left function composition.
The rightmost function may have any arity; the remaining functions must be unary.

**Returns**: <code>function</code> - A new function as the result of the composition.

| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | The functions to compose. |

**Example**
```js
const inc = x => x + 1;
const double = x => x * 2;

compose(inc, double)(3); // => 7
compose(double, inc)(3); // => 8

const capitalize = a => a.toUpperCase();
const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
const shoutGreeting = compose(capitalize, greeting);
shoutGreeting('John', 'Doe'); // => 'HELLO, MY NAME IS JOHN DOE.'
```
