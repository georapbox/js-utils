### [Function](../) > debounce

```js
debounce(callback, n [, immediate])
```

> Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for
> 'n' milliseconds. If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.

- <code>callback {function}</code>

The function to be executed.

- <code>n {number}</code>

Time of delay in milliseconds.

- <code>[immediate] {boolean}</code>

If true or any truthy value, triggers the function on the leading edge.

#### Example
```js
var doSomething = debounce(function () {
    // Do your magic here...
}, 250);

window.addEventListener('resize', doSomething, false);
```
