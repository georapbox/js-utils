### [Objects](../) > container

```js
container(value)
```

Acts as a wrapper/container around the `value` passed in.

#### Arguments

- `value` _(*)_: The value to wrap.

#### Returns

_(object)_: Returns the container object.

---

```js
.map(fn)
```

A `container` method that allows grabbing the value from the container and pass it to the function `fn`. When we are done mapping the value goes back to the container.

#### Arguments

- `fn` _(function)_: The function that the value is passed in.

#### Returns

_(object)_: Returns the mapped object.

#### Examples

```js
var
    getFirst = function (item) {
        return item[0];
    },
    capitalize = function (item) {
        return item.toUpperCase();
    },
    reverse = function (arr) {
        return arr.reverse();
    };

var c = container(['a', 'b', 'c']),      // -> {val: ['a', 'b', 'c']}
    reversed = c.map(reverse),           // -> {val: ['c', 'b', 'a']}
    first = reversed.map(getFirst),      // -> {val: 'c'}
    capital = first.map(capitalize),     // -> {val: 'C'}
    match = capital.map(function (val) {
        return val.match(/cat/gi);
    });                                  // -> {val: null}

// The above could be also written like this:
container(['a', 'b', 'c'])
    .map(reverse)
    .map(getFirst)
    .map(capitalize)
    .map(function (val) {
        return val.match(/cat/gi);
    });
```
