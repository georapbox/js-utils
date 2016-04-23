### [Function](../) > partialRight

```js
partialRight(fn [, args...])
```
> Creates a function that invokes `func` with `args` **appended** to the arguments it receives.

- `fn {Function}`

The function to be invoked with the partially applied arguments.

- `[args...] {*}`

The arguments to be partially applied.

#### Example
```js
var greet = function (greeting, name) {
    return greeting + ' ' + name;
};

var greetGeorge = partialRight(greet, 'George');
greetGeorge('Hello');
// -> "Hello George";
```
