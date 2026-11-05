<a name="ary"></a>

## ary(fn, cap) ⇒ <code>function</code>
Creates a function that invokes `fn` with at most `cap` arguments,
ignoring any additional arguments.

The returned function preserves the caller's `this` binding and
forwards the return value of `fn`.
If `cap` is zero or negative, no arguments are forwarded.

**Kind**: global function  
**Returns**: <code>function</code> - The new function with capped arguments.  
**Throws**:

- <code>TypeError</code> If `fn` is not a function or `cap` is not an integer.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to restrict. |
| cap | <code>number</code> | The maximum number of arguments to forward. Must be an integer. |

**Example**  
```js
const fn = ary((...args) => args, 2);

fn(1, 2, 3, 4);
// => [1, 2]

const sum = (a, b, c) => a + b + (c ?? 0);
const sumTwo = ary(sum, 2);

sumTwo(10, 20, 30);
// => 30

const array = ['1', '2', '3'];
const toInteger = ary(parseInt, 1);

array.map(toInteger);
// => [1, 2, 3]
```
