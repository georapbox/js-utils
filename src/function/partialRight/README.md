### [Function](../) > partialRight

```js
partialRight(func [, args...])
```

Creates a function that invokes `func` with `args` **appended** to the arguments it receives.

#### Arguments

- `func` _(function)_: The function to be invoked with the partially applied arguments.

- `[args...]` _(*)_: Optional. The arguments to be partially applied.

#### Returns

_(function)_: Returns a function that invokes the originally-specified function `fn`.

#### Example
```js
var greet = function (greeting, name) {
    return greeting + ' ' + name;
};

var greetGeorge = partialRight(greet, 'George');
greetGeorge('Hello');
// -> "Hello George";
```
