<a name="once"></a>

## once(fn) ⇒ <code>function</code>
Creates a function that invokes `fn` at most once.

The first call invokes `fn` with the caller's `this` binding and
arguments. Subsequent calls return the result of the first invocation
without calling `fn` again.

If the first invocation throws, the error is propagated and `fn`
is not invoked again.

**Kind**: global function  
**Returns**: <code>function</code> - The new function that can invoke `fn` only once.  
**Throws**:

- <code>TypeError</code> If `fn` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to restrict. |

**Example**  
```js
let count = 0;
const callback = once(() => ++count);

callback();
// => 1

callback();
// => 1

callback();
// => 1

const greet = once((name) => `Hello, ${name}!`);

greet('John');
// => 'Hello, John!'

greet('Jane');
// => 'Hello, John!'
```
