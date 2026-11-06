<a name="pipe"></a>

## pipe(...fns) ⇒ <code>function</code>
Creates a function that performs left-to-right function composition.

The leftmost function receives all arguments passed to the composed
function. Each remaining function receives the result of the function
to its left as its only argument.

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

pipe(inc, double)(3);
// => 8

pipe(double, inc)(3);
// => 7

const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
const capitalize = str => str.toUpperCase();

const shoutGreeting = pipe(greeting, capitalize);

shoutGreeting('John', 'Doe');
// => 'HELLO, MY NAME IS JOHN DOE.'

pipe()(42);
// => 42
```
