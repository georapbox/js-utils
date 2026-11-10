<a name="curry"></a>

## curry(fn, [arity]) ⇒ <code>function</code>
Creates a curried function that collects arguments across multiple calls
until the specified arity is reached.

Arguments can be provided individually or in groups. Once enough
arguments are collected, the original function is invoked with all
collected arguments and the final call's `this` binding.

By default, the arity is determined by `fn.length`. An explicit arity
can be provided for functions with default or rest parameters.
If the arity is zero, the original function is invoked on the first call.

**Kind**: global function  
**Returns**: <code>function</code> - The curried function.  
**Throws**:

- <code>TypeError</code> If `fn` is not a function or `arity` is not an integer.
- <code>RangeError</code> If `arity` is negative.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | The function to curry. |
| [arity] | <code>number</code> | <code>fn.length</code> | The number of arguments required before invoking `fn`. Must be a non-negative integer. |

**Example**  
```js
const add = curry((a, b) => a + b);

add(1)(2);
// => 3

const sum = curry((a, b, c) => a + b + c);

sum(1)(2)(3);
// => 6

sum(1, 2)(3);
// => 6

sum(1)(2, 3);
// => 6

const addWithDefaults = curry((a = 0, ...args) => a + args[0] + args[1], 3);

addWithDefaults(1)(2)(3);
// => 6
```
