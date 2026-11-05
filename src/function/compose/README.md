<a name="compose"></a>

## compose(...fns) ⇒ <code>function</code>
Creates a function that performs right-to-left function composition.

The rightmost function receives all arguments passed to the composed
function. Each remaining function receives the result of the function
to its right as its only argument.

The composed function preserves the caller's `this` binding.
If no functions are provided, an identity function is returned.
If only one function is provided, it is returned unchanged.

**Kind**: global function  
**Returns**: <code>function</code> - The composed function.  
**Throws**:

- <code>TypeError</code> If any argument is not a function.


| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | The functions to compose. |

**Example**  
```js
const inc = x => x + 1;
const double = x => x * 2;

compose(inc, double)(3);
// => 7

compose(double, inc)(3);
// => 8

const capitalize = str => str.toUpperCase();
const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;

const shoutGreeting = compose(capitalize, greeting);

shoutGreeting('John', 'Doe');
// => 'HELLO, MY NAME IS JOHN DOE.'

compose()(42);
// => 42
```
