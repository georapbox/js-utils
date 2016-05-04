### [Function](../) > once

```js
once(func, [, thisArg])
```

Ensure a given functionality only runs once.

#### Arguments

- `func` _(function)_: The function to restrict.

- `[thisArg]` _(object)_: Optional. Value to use as this when executing callback.

#### Returns

_(function)_: Returns the new restricted function.

#### Examples
```js
var num = 0;
var canOnlyFireOnce = once(function () {
    return 'Number is now ' + (num += 1);
});

canOnlyFireOnce();
// -> "Number is now 1"

canOnlyFireOnce();
// -> "Number is now 1"
```
