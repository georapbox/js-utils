### [Misc](../) > once

```js
once(func, [, thisArg])
```

> Ensure a given functionality only runs once.

- `func {Function}`

Callback function to be executed only one time.

- `[thisArg] {Object}`

Optional. Value to use as this when executing callback.

#### Example
```js
var num = 0;
var canOnlyFireOnce = once(function () {
    return 'Number is now ' + (num += 1);
});

canOnlyFireOnce(); // -> "Number is now 1"
canOnlyFireOnce(); // -> "Number is now 1"
```
