### [Function](../) > partialRight

```js
partialRight(fn [, args...])
```
> Creates a function that invokes `func` with `partials` **appended** to the arguments it receives.

- `fn {Function}`

The function to be invoked with the bound arguments.

- `[args...] {*}`

Some number of the originally-specified arguments to be passed.

#### Example
```js
var greet = function (greeting, name) {
    return greeting + ' ' + name;
};

var greetGeorge = partialRight(greet, 'George');
greetGeorge('Hello');
// -> "Hello George";
```
