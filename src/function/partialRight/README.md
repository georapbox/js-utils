<a name="partialRight"></a>

## partialRight(func) ⇒ <code>function</code>
Creates a function that invokes `func` with `args` appended to the arguments it receives.
Returns a function `partialApplicator` that, when invoked, invokes the `fn` function with the
originally-specified arguments, followed by all arguments passed to `partialApplicator`.

**Kind**: global function  
**Returns**: <code>function</code> - partialApplicator A function that invokes the originally-specified function `fn`.  
**Category**: Function  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be invoked with the partially applied arguments. |
| [args...] | <code>\*</code> | The arguments to be partially applied. |

**Example**  
```js
var greet = function (greeting, name) {
  return greeting + ' ' + name;
};

var greetGeorge = partialRight(greet, 'George');
greetGeorge('Hello');
// -> "Hello George";
```
