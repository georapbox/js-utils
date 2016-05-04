### [Function](../) > throttle

```js
throttle(callback [, n=0])
```

Limits the number of times a function can be called in a given period.

#### Arguments

- `callback` _(function)_: The function to be executed.

- `[n=0]` _(number)_: Optional. Default value is 0. Time of delay in milliseconds.

#### Returns

_(function)_: Returns the throttled function.

#### Example
```js
// A method that should be called no more than 4 times per second.
var doSomething = throttle(function () {
    // Do something...
}, 250);

window.addEventListener('resize', doSomething, false);
```
