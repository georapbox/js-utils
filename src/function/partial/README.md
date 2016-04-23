### [Function](../) > partial

```js
partial(fn [, args...])
```
> Creates a function that invokes `func` with `args` **prepended** to the arguments it receives.

- `fn {Function}`

The function to be invoked with the partially applied arguments.

- `[args...] {*}`

The arguments to be partially applied.

#### Examples
```js
var greet = function(greeting, name) {
    return greeting + ' ' + name;
};

var sayHelloTo = partial(greet, 'Hello');
sayHelloTo('George');
// -> "Hello George";
```

```js
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
