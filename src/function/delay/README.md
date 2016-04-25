### [Function](../) > delay

```js
delay(func, [wait=0] /*, args...*/)
```
> Invokes `func` after `wait` milliseconds.
> Any additional arguments are provided to func when it’s invoked.
> Returns the timer's id.

- `func {Function}`

The function to delay.

- `[wait=0] {Number}`

The number of milliseconds to delay invokation.

- `[args...] {*}`

The arguments to invoke `func` with.

#### Example
```js
var say = function (a, b) {
    console.log(a + ' ' + b);
};

var delayed = delay(say, 2000, 'hello', 'world');
// -> Logs 'hello world' after two seconds.
```
