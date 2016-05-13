### [Function](../) > partial

```js
partial(func [, args...])
```

Creates a function that invokes `func` with `args` **prepended** to the arguments it receives.

#### Arguments

- `func` _(function)_: The function to be invoked with the partially applied arguments.

- `[args...]` _(*)_: Optional. The arguments to be partially applied.

#### Returns

_(function)_: Returns a function that invokes the originally-specified function `fn`.

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
