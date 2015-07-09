### [Misc](../) > throttle

```js
throttle(callback, n)
```

> Limits the number of times a function can be called in a given period.

- <code>callback {function}</code>

The function to be executed.

- <code>n {number}</code>

Time of delay in milliseconds.

#### Example
```js
// A method that should be called no more than 4 times per second.
var doSomething = throttle(function () {
    // Do your magic here...
}, 250);

window.addEventListener('resize', doSomething, false);
```