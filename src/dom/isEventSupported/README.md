### [DOM](../) > isEventSupported

```js
isEventSupported(eventName [, element])
```

> Checks if an event is supported in a browser environment.

- <code>eventName {String}</code>

The name of the event to check if is supported.

- <code>[element] {Object}</code>

An HTML node to check if an event is supported on.

Use it if you need to check for an event on a specific element.
Some events are supported on specific elements, eg `resize` is supported on `window` but not on a `div` element.

If omited the results are cached and next calls with the same `eventName` will return the results from cache.

#### Example
```js
isEventSupported('submit'); // => true - Checks on a `form` element
isEventSupported('click'); // => true - Checks on a `div` element
isEventSupported('resize'); // => false - Checks on a `div` element
isEventSupported('resize', window); // => true - Checks on a `window`
isEventSupported('keyup'); // => true - Checks on a `div` element
isEventSupported('keyup', document.createElement('input')); // => true - Checks on an `input` element

```
