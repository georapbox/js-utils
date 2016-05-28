<a name="partial"></a>

## partial(func) ⇒ <code>function</code>
Creates a function that invokes `func` with `args` prepended to the arguments it receives.
Returns a function `partialApplicator` that, when invoked, invokes the `fn` function with the
originally-specified arguments, followed by all arguments passed to `partialApplicator`.

**Kind**: global function  
**Returns**: <code>function</code> - partialApplicator A function that invokes the originally-specified function `func`.  
**Category**: Function  
**Throws**:

- <code>TypeError</code> If `func` is not function.

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be invoked with the partially applied arguments. |
| [args...] | <code>\*</code> | The arguments to be partially applied. |

**Example**  
```js
// Example 1
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var sayHelloTo = partial(greet, 'Hello');
sayHelloTo('George');
// -> "Hello George";

// Example 2
function add() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (accum, val) {
    return accum + val;
  }, 0);
}

var addOne = partial(add, 1);

addOne(2);
// -> 3

addOne(2, 3);
// -> 6

addOne(9, 1, 4);
// -> 15
```
