### [Misc](../) > container

```js
container(value)
```

> Acts as a wrapper/container around the `value` passed in.

- <code>value {\*}</code>

The value to wrap. Can be of any type.

```js
.map(fn)
```

- <code>fn {Function}</code>

The function that the value is passed in.

> A `container` method that allows grabbing the value from the container and pass it to the function `fn`. When we are done mapping the value goes back to the container.

#### Example(s)

```js
var first = function (item) {
    return item[0];
};

var capitalize = function (item) {
    return item.toUpperCase();
};
```
