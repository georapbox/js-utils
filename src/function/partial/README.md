### [Function](../) > partial

```js
partial(fn [, args...])
```
> Take a function that accepts a number of arguments,
bind values to one or more of those arguments and finally
return a new function that only accepts the remaining, unbound arguments.

- <code>fn {Function}</code>

The function to be invoked with the bound arguments.

- <Code>[args...] {\*}</code>

Some number of the originally-specified arguments to be passed.

#### Example(s)
```js
// Example 1
function add() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function (accum, val) {
        return accum + val;
    }, 0);
}

var addOne = partial(add, 1);

addOne(2);       // => 3
addOne(2, 3);    // => 6
addOne(9, 1, 4); // => 15

// Example 2
function say(name, message) {
    return name + ' says ' + message + '.'
}

var georgeSays = partial(say, 'George'),
    johnSays = partial(say, 'John');

georgeSays('hello'); // => "George says hello."
johnSays('goodbye'); // => "John says goodbye."
```
